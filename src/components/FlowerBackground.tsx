export function FlowerBackground({
  color = "currentColor",
  opacity = 0.07,
  className = "",
  flip = false,
}: {
  color?: string;
  opacity?: number;
  className?: string;
  flip?: boolean;
}) {
  const cx = 200;
  const cy = 260;
  const pl = 155;

  const petalPath = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const tip = { x: cx + sin * pl, y: cy - cos * pl };
    const ctrl1L = { x: cx + sin * 14 - cos * 40, y: cy - cos * 14 - sin * 40 };
    const ctrl2L = { x: cx + sin * 10 - cos * (pl - 30), y: cy - cos * 10 - sin * (pl - 30) };
    const ctrl1R = { x: cx - sin * 10 - cos * (pl - 30), y: cy + cos * 10 - sin * (pl - 30) };
    const ctrl2R = { x: cx - sin * 14 - cos * 40, y: cy + cos * 14 - sin * 40 };

    return `M ${cx} ${cy} C ${ctrl1L.x} ${ctrl1L.y} ${ctrl2L.x} ${ctrl2L.y} ${tip.x} ${tip.y} C ${ctrl1R.x} ${ctrl1R.y} ${ctrl2R.x} ${ctrl2R.y} ${cx} ${cy} Z`;
  };

  const stamenPath = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const tipX = cx + Math.sin(rad) * (pl + 20);
    const tipY = cy - Math.cos(rad) * (pl + 20);
    return { x1: cx, y1: cy, x2: tipX, y2: tipY };
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 400 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          right: flip ? "auto" : "-5%",
          left: flip ? "-5%" : "auto",
          top: "-5%",
          height: "110%",
          width: "auto",
          opacity,
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <path key={a} d={petalPath(a)} fill={color} />
        ))}
        {[30, 90, 150, 210, 270, 330].map((a) => {
          const s = stamenPath(a);
          return (
            <g key={a}>
              <line
                x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
                stroke={color} strokeWidth="1.5" strokeLinecap="round"
              />
              <circle cx={s.x2} cy={s.y2} r="3" fill={color} />
            </g>
          );
        })}
        <path
          d={`M ${cx} ${cy + 10} C ${cx - 6} ${cy + 80} ${cx + 6} ${cy + 160} ${cx} ${cy + 290}`}
          stroke={color} strokeWidth="7" strokeLinecap="round" fill="none"
        />
        <path
          d={`M ${cx} ${cy + 110} C ${cx - 50} ${cy + 80} ${cx - 90} ${cy + 70} ${cx - 110} ${cy + 95} C ${cx - 90} ${cy + 110} ${cx - 50} ${cy + 118} ${cx} ${cy + 110} Z`}
          fill={color}
        />
        <path
          d={`M ${cx} ${cy + 165} C ${cx + 50} ${cy + 135} ${cx + 90} ${cy + 125} ${cx + 110} ${cy + 148} C ${cx + 90} ${cy + 165} ${cx + 50} ${cy + 173} ${cx} ${cy + 165} Z`}
          fill={color}
        />
      </svg>
    </div>
  );
}
