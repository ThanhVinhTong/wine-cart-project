import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const upstreamBaseUrlRaw =
      process.env.WINE_FINDER_API_URL || process.env.NEXT_PUBLIC_WINE_FINDER_API_URL || 'http://localhost:8000';
    const upstreamBaseUrl = upstreamBaseUrlRaw.replace(/\/$/, '');
    const upstreamUrl = upstreamBaseUrl.endsWith('/classify-producer')
      ? upstreamBaseUrl
      : `${upstreamBaseUrl}/classify-producer`;

    const incomingFormData = await req.formData();
    const uploadFile = incomingFormData.get('uploadFile');

    if (!(uploadFile instanceof File)) {
      return NextResponse.json({ error: 'Missing uploadFile in form data' }, { status: 400 });
    }

    const forwardFormData = new FormData();
    forwardFormData.append('uploadFile', uploadFile, uploadFile.name);

    const upstreamResponse = await fetch(upstreamUrl, {
      method: 'POST',
      body: forwardFormData,
      cache: 'no-store',
    });

    const responseText = await upstreamResponse.text();
    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { error: 'Upstream classify API failed', upstreamUrl, status: upstreamResponse.status, detail: responseText },
        { status: upstreamResponse.status }
      );
    }

    return new NextResponse(responseText, {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to proxy classify request', detail: error?.message }, { status: 500 });
  }
}
