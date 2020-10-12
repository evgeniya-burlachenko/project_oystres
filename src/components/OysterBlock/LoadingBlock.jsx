import React from "react";
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            speed={0}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <circle cx="137" cy="123" r="117" />
            <rect x="-1" y="256" rx="3" ry="3" width="280" height="37" />
            <rect x="0" y="304" rx="6" ry="6" width="280" height="84" />
            <rect x="13" y="409" rx="3" ry="3" width="95" height="37" />
            <rect x="120" y="402" rx="21" ry="21" width="160" height="47" />
            <rect x="211" y="402" rx="0" ry="0" width="0" height="2" />
            <rect x="192" y="418" rx="0" ry="0" width="11" height="17" />
        </ContentLoader>
    );

}

export default LoadingBlock;