const TriStateMap = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 960 600"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* US States - Simplified paths */}
      {/* Gray states (rest of US) */}
      <g fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1">
        {/* California */}
        <path d="M122,288 L140,205 L148,180 L135,140 L140,100 L152,92 L175,100 L190,180 L195,220 L185,280 L175,340 L160,380 L135,420 L110,400 L95,360 L100,320 Z" />
        {/* Nevada */}
        <path d="M175,100 L190,100 L210,105 L225,240 L215,280 L190,180 Z" />
        {/* Montana */}
        <path d="M225,45 L320,50 L380,55 L385,120 L350,125 L280,120 L220,110 L210,80 Z" />
        {/* Wyoming */}
        <path d="M280,120 L350,125 L355,190 L290,185 L275,180 Z" />
        {/* Utah */}
        <path d="M210,105 L275,110 L280,175 L290,185 L285,240 L225,240 Z" />
        {/* Colorado */}
        <path d="M290,185 L355,190 L360,255 L295,250 L285,240 Z" />
        {/* Arizona */}
        <path d="M160,380 L185,280 L215,280 L225,240 L235,320 L220,400 L180,420 Z" />
        {/* New Mexico */}
        <path d="M235,320 L285,240 L295,250 L300,320 L305,400 L250,405 L220,400 Z" />
        {/* North Dakota */}
        <path d="M380,55 L450,58 L455,105 L385,100 Z" />
        {/* South Dakota */}
        <path d="M385,100 L455,105 L460,160 L390,155 Z" />
        {/* Nebraska */}
        <path d="M355,190 L390,155 L460,160 L465,205 L365,200 Z" />
        {/* Kansas */}
        <path d="M365,200 L465,205 L470,260 L370,255 L360,255 Z" />
        {/* Oklahoma */}
        <path d="M370,255 L470,260 L475,295 L500,295 L500,330 L365,330 L365,310 Z" />
        {/* Texas */}
        <path d="M305,400 L365,330 L500,330 L510,380 L500,450 L450,510 L380,530 L320,490 L290,450 L280,420 Z" />
        {/* Minnesota */}
        <path d="M455,58 L520,55 L535,62 L540,115 L490,120 L455,105 Z" />
        {/* Iowa */}
        <path d="M460,160 L540,155 L550,195 L465,200 Z" />
        {/* Missouri */}
        <path d="M470,260 L550,255 L565,210 L550,195 L465,200 Z M470,260 L560,275 L565,300 L475,295 Z" />
        {/* Arkansas */}
        <path d="M500,295 L560,300 L570,350 L505,345 Z" />
        {/* Louisiana */}
        <path d="M505,345 L570,350 L585,420 L565,450 L520,440 L510,380 Z" />
        {/* Wisconsin */}
        <path d="M540,115 L580,105 L600,75 L605,130 L545,145 Z" />
        {/* Illinois */}
        <path d="M550,195 L600,190 L605,260 L560,275 L550,255 Z" />
        {/* Michigan */}
        <path d="M600,75 L640,55 L670,65 L675,90 L650,120 L610,110 Z M610,130 L670,120 L685,175 L625,185 Z" />
        {/* Indiana */}
        <path d="M605,195 L650,190 L655,255 L610,260 Z" />
        {/* Ohio */}
        <path d="M655,190 L705,180 L720,235 L660,245 Z" />
        {/* Kentucky */}
        <path d="M610,260 L660,245 L720,235 L730,260 L710,290 L615,295 Z" />
        {/* Tennessee */}
        <path d="M615,295 L710,290 L755,295 L760,330 L615,335 Z" />
        {/* Mississippi */}
        <path d="M570,350 L615,345 L620,420 L575,415 Z" />
        {/* Alabama */}
        <path d="M615,345 L665,340 L675,420 L620,425 Z" />
        {/* Georgia */}
        <path d="M665,340 L720,330 L740,400 L695,420 L675,420 Z" />
        {/* Florida */}
        <path d="M695,420 L740,400 L780,420 L810,500 L760,540 L720,510 L695,450 Z" />
        {/* South Carolina */}
        <path d="M720,330 L770,310 L790,350 L740,365 Z" />
        {/* North Carolina */}
        <path d="M720,290 L770,280 L830,290 L790,320 L720,325 Z" />
        {/* Virginia */}
        <path d="M730,260 L800,250 L815,275 L770,280 L720,285 Z" />
        {/* West Virginia */}
        <path d="M720,235 L750,225 L765,250 L730,260 Z" />
        {/* Pennsylvania */}
        <path d="M720,180 L800,175 L810,210 L740,220 Z" />
        {/* New York */}
        <path d="M750,130 L800,110 L840,125 L850,175 L800,175 L750,150 Z" />
        {/* Vermont */}
        <path d="M825,85 L840,70 L850,100 L840,110 Z" />
        {/* New Hampshire */}
        <path d="M850,70 L860,55 L870,95 L855,100 Z" />
        {/* Maine */}
        <path d="M870,30 L890,25 L900,90 L875,95 L860,55 Z" />
        {/* Massachusetts */}
        <path d="M855,105 L890,100 L895,120 L860,125 Z" />
        {/* Connecticut */}
        <path d="M850,130 L875,125 L880,145 L855,148 Z" />
        {/* Rhode Island */}
        <path d="M880,120 L895,118 L895,135 L882,137 Z" />
        {/* New Jersey */}
        <path d="M820,175 L840,170 L850,210 L825,215 Z" />
        {/* Delaware */}
        <path d="M825,215 L840,212 L845,235 L830,238 Z" />
        {/* Maryland */}
        <path d="M790,230 L830,225 L835,250 L795,252 Z" />
      </g>
      
      {/* Highlighted States - Washington, Oregon, Idaho */}
      <g fill="hsl(var(--primary))" stroke="hsl(var(--primary-foreground))" strokeWidth="1.5" opacity="0.8">
        {/* Washington */}
        <path d="M115,35 L185,32 L210,45 L215,75 L210,80 L170,85 L125,90 L100,85 L95,60 Z" />
        {/* Oregon */}
        <path d="M100,85 L125,90 L170,85 L175,100 L190,100 L210,105 L210,145 L195,175 L140,180 L135,140 L110,100 Z" />
        {/* Idaho */}
        <path d="M210,45 L225,45 L280,50 L280,120 L275,180 L260,180 L225,180 L210,145 L210,105 L210,80 L215,75 Z" />
      </g>
    </svg>
  );
};

export default TriStateMap;