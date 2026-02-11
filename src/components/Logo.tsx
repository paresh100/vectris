export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 320"
            width="600"
            height="320"
            fill="none"
            className={className}
            aria-label="Vectris Chartered Accountants"
        >
            {/* Large central V */}
            <text
                x="300"
                y="220"
                textAnchor="middle"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="260"
                fontWeight="700"
                fill="currentColor"
                letterSpacing="-0.02em"
            >
                V
            </text>

            {/* Spaced letters: V E C _ T R I S */}
            <text
                x="28"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                V
            </text>
            <text
                x="108"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                E
            </text>
            <text
                x="188"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                C
            </text>
            {/* T R I S on the right side of the V */}
            <text
                x="370"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                T
            </text>
            <text
                x="432"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                R
            </text>
            <text
                x="500"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                I
            </text>
            <text
                x="545"
                y="200"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="52"
                fontWeight="400"
                fill="currentColor"
                letterSpacing="0.05em"
            >
                S
            </text>

            {/* Chartered Accountants subtitle */}
            <text
                x="300"
                y="290"
                textAnchor="middle"
                fontFamily="'Playfair Display', 'Times New Roman', serif"
                fontSize="26"
                fontWeight="400"
                fontStyle="italic"
                fill="currentColor"
                letterSpacing="0.15em"
            >
                Chartered Accountants
            </text>
        </svg>
    );
}
