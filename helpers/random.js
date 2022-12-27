export default function getRandomInt(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export const getRandomColor = () => {
  const colors = [
    "#D21100",
    "#4DBE25",
    "#66bfbf",
    "#FCAB00",
    "#555860",
    "#FAF3F3",
    "#E1E5EA",
    "#e6ddee",
    "#2d2829",
    "#5B5456",
    "#A7BBC7",
    "#DA7F8F",
    "#918B8D",
  ];
  return colors[getRandomInt(colors.length)];
};
