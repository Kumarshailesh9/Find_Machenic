import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      carModel,
      fuelType,        // ✅ NEW
      carNumber,
      addOnService,    // ✅ NEW
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
*🚗 New Car Service Booking*
----------------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}

🚘 *Vehicle Model:* ${carModel}
⛽ *Fuel Type:* ${fuelType || "N/A"}
🔢 *Vehicle Number:* ${carNumber || "N/A"}

🛠 *Main Service:* ${serviceType}
➕ *Add-on Service:* ${addOnService || "None"}

📍 *Service Area:* ${serviceArea}
🏠 *Address:* ${address}

📅 *Preferred Date:* ${date || "Flexible"}

📝 *Notes:* ${notes || "No additional notes"}

🚗 *Free Pickup & Drop:* Under 15 KM
----------------------------------
    `;

    // SEND WHATSAPP MESSAGE
    const message = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to: `whatsapp:${process.env.ADMIN_WHATSAPP_NUMBER}`,
      body: formattedMessage,
    });

    return NextResponse.json({
      success: true,
      messageId: message.sid,
    });

  } catch (error) {
    console.error("WhatsApp sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send WhatsApp message" },
      { status: 500 }
    );
  }
}
