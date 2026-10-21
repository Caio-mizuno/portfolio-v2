import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Imagem de prévia do link (WhatsApp, LinkedIn, X...). Gerada uma vez no build.
export const alt = "Caio Mizuno · Squad Leader e Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accent = "#da9d00";

// JetBrains Mono em negrito, a mesma fonte do site. Se o Google Fonts não responder
// no build, a imagem sai com a fonte padrão em vez de quebrar o build.
async function loadFont(text) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&text=${encodeURIComponent(text)}`
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/assets/profile2.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  const name = "Caio Mizuno";
  const role = "Squad Leader · Software Engineer";
  const brand = "mizunotech.com.br";
  const font = await loadFont(name + role + brand);

  // Tudo centralizado: WhatsApp e outros recortam a prévia em quadrado no meio.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 50% 38%, rgba(218,157,0,0.12), #1c1b22 58%)",
          color: "white",
          fontFamily: font ? "JetBrains Mono" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 280,
            height: 280,
            borderRadius: 9999,
            border: `5px solid ${accent}`,
            overflow: "hidden",
            background: "#232329",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} alt="" width={280} height={280} style={{ objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", fontSize: 64, lineHeight: 1, marginTop: 32 }}>{name}</div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.85)", marginTop: 18 }}>
          {role}
        </div>
        <div style={{ display: "flex", fontSize: 22, color: accent, marginTop: 14, letterSpacing: 2 }}>
          {brand}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "JetBrains Mono", data: font, weight: 700, style: "normal" }] : undefined,
    }
  );
}
