import { useState } from "react";

const Area = () => {
    const [size, setSize] = useState({ width: 200, height: 100 });

    return (
        <div>
            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>

            <button
                onClick={() => {
                    const newWidth = Math.min(size.width + 20, 150);
                    setSize({ ...size, width: newWidth });
                }}
            >
                너비 증가
            </button>

            <button
                onClick={() => {
                    const newWidth = Math.max(size.width - 20, 0);
                    setSize({ ...size, width: newWidth });
                }}
            >
                너비 감소
            </button>

            <button
                onClick={() => {
                    const newHeight = Math.min(size.height + 10, 150);
                    setSize({ ...size, height: newHeight });
                }}
            >
                높이 증가
            </button>

            <button
                onClick={() => {
                    const newHeight = Math.max(size.height - 10, 0);
                    setSize({ ...size, height: newHeight });
                }}
            >
                높이 감소
            </button>
        </div>
    );
};

export default Area;