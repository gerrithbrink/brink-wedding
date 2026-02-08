export async function onRequestGet(context) {
  try {
    const { results } = await context.env.DB.prepare(
      "SELECT * FROM guests ORDER BY id DESC"
    ).all();
    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    // Map frontend data to requested schema
    const name = `${body.firstName} ${body.lastName}`.trim();
    const email = body.email;
    const rsvp_status = body.attending;

    // Store additional details in the message column as JSON string
    // This satisfies the schema requirement while preserving all app data
    const additionalDetails = {
      dietaryRestrictions: body.dietaryRestrictions,
      songRequest: body.songRequest
    };
    const message = JSON.stringify(additionalDetails);

    const info = await context.env.DB.prepare(
      "INSERT INTO guests (name, email, rsvp_status, message) VALUES (?, ?, ?, ?)"
    )
      .bind(name, email, rsvp_status, message)
      .run();

    return new Response(JSON.stringify({ success: true, info }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}