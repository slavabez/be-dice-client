export const absolute = ({ y = "top", x = "right" } = {}) => `
    position: absolute;
    ${y}: 0;
    ${x}: 0;
`;
