# -*- coding: utf-8 -*-
"""Gera assets/og-cover.png (1200x630) — cartão de preview do link do portfólio."""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, "assets", "og-cover.png")

BG = (9, 9, 14)
SURFACE = (18, 18, 29)
BORDER = (38, 38, 64)
TEXT = (237, 234, 247)
DIM = (156, 150, 180)
ACCENT = (167, 139, 250)
ACCENT2 = (124, 58, 237)

W, H = 1200, 630
img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img, "RGBA")

# Glow radial roxo no canto superior direito e inferior esquerdo
glow = Image.new("L", (W, H), 0)
gd = ImageDraw.Draw(glow)
for cx, cy, r in [(1050, 80, 500), (100, 580, 420)]:
    for i in range(r, 0, -6):
        alpha = int(38 * (1 - i / r))
        gd.ellipse([cx - i, cy - i, cx + i, cy + i], fill=alpha)
purple = Image.new("RGB", (W, H), ACCENT2)
img = Image.composite(purple, img, glow)
draw = ImageDraw.Draw(img, "RGBA")

# Grid sutil
for x in range(0, W, 48):
    draw.line([(x, 0), (x, H)], fill=(255, 255, 255, 8))
for y in range(0, H, 48):
    draw.line([(0, y), (W, y)], fill=(255, 255, 255, 8))

FONTS = r"C:\Windows\Fonts"
def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)

f_logo = font("arialbd.ttf", 44)
f_kicker = font("arialbd.ttf", 26)
f_title = font("arialbd.ttf", 72)
f_sub = font("arial.ttf", 32)
f_url = font("arial.ttf", 26)

# Logo "MV." num quadrado roxo
draw.rounded_rectangle([80, 70, 172, 162], radius=24, fill=ACCENT2)
draw.text((126, 116), "MV", font=f_logo, fill=(255, 255, 255), anchor="mm")

draw.text((80, 240), "ESTUDANTE DE TI · BUSCANDO ESTÁGIO", font=f_kicker, fill=ACCENT)
draw.text((80, 290), "Márcio Gabriel Vieira", font=f_title, fill=TEXT)
draw.text((80, 390), "Desenvolvedor Full Stack — Web · Mobile · Jogos", font=f_sub, fill=DIM)

# Chips de stack
chips = ["JavaScript", "Node.js", "Firebase", "React Native", "Godot"]
x = 80
for c in chips:
    tw = draw.textlength(c, font=f_url)
    draw.rounded_rectangle([x, 470, x + tw + 36, 518], radius=24, outline=BORDER, width=2, fill=SURFACE)
    draw.text((x + 18, 494), c, font=f_url, fill=ACCENT, anchor="lm")
    x += tw + 52

draw.text((80, 560), "kadilaque.github.io", font=f_url, fill=DIM)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
img.save(OUT)
print("OK:", OUT)
