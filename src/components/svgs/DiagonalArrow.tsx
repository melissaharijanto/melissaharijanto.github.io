const DiagonalArrow = ({
    hexColor = '#FFFFFFF',
    width,
}: {
    hexColor: string;
    width: string;
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${width}`}
            zoomAndPan="magnify"
            viewBox="0 0 2250 2250.000011"
            preserveAspectRatio="xMidYMid meet"
            version="1.0">
            <defs>
                <clipPath id="acf47c5253">
                    <path
                        d="M 673.382812 0 L 2249.5 0 L 2249.5 224.898438 L 673.382812 224.898438 Z M 673.382812 0 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="b4964a94a9">
                    <path
                        d="M 0.5 0 L 2249.5 0 L 2249.5 2249 L 0.5 2249 Z M 0.5 0 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="f6afdb6b1a">
                    <path
                        d="M 2249.5 159.027344 L 159.527344 2249 L 0.5 2089.972656 L 2090.472656 0 Z M 2249.5 159.027344 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="7b15b53e0c">
                    <path
                        d="M 2024.601562 0 L 2249.5 0 L 2249.5 1576.117188 L 2024.601562 1576.117188 Z M 2024.601562 0 "
                        clip-rule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clip-path="url(#acf47c5253)">
                <path
                    fill={hexColor}
                    d="M 673.382812 0 L 2249.441406 0 L 2249.441406 224.898438 L 673.382812 224.898438 Z M 673.382812 0 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                />
            </g>
            <g clip-path="url(#b4964a94a9)">
                <g clip-path="url(#f6afdb6b1a)">
                    <path
                        fill={hexColor}
                        d="M 2249.5 159.027344 L 159.769531 2248.761719 L 0.738281 2089.730469 L 2090.472656 0 Z M 2249.5 159.027344 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                    />
                </g>
            </g>
            <g clip-path="url(#7b15b53e0c)">
                <path
                    fill={hexColor}
                    d="M 2249.5 0 L 2249.5 1576.058594 L 2024.601562 1576.058594 L 2024.601562 0 Z M 2249.5 0 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                />
            </g>
        </svg>
    );
};

export default DiagonalArrow;
