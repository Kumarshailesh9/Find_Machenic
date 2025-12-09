import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      carModel,
      carNumber,
      serviceType,
      serviceArea,
      address,
      date,
      notes,
    } = body;

    // Initialize Twilio Client
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const formattedMessage = `
*New Car Service Request*  
----------------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
🚗 *Car Model:* ${carModel}
🔢 *Car Number:* ${carNumber}
🛠 *Service Type:* ${serviceType}
📍 *Service Area:* ${serviceArea}
🏠 *Address:* ${address}
📅 *Preferred Date:* ${date}

📝 *Notes:* ${notes}

🚗 *Free Pickup & Drop:* Available
----------------------------------
    `;

    // ⭐ SEND WHATSAPP MESSAGE
    const message = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`, // your Twilio WhatsApp number
      to: `whatsapp:${process.env.ADMIN_WHATSAPP_NUMBER}`, // your admin number
      body: formattedMessage,
    });

    return NextResponse.json({
      success: true,
      messageId: message.sid,
    });
  } catch (error) {
    console.error("WhatsApp sending error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
