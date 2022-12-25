import React, { useEffect, useState, useMemo } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import logHelper from "../../helpers/logHelper";
import testD from "./testD";
import getRandomInt from "../../helpers/random";

const minHW = 60;

const GameFillword = () => {
  const [rowLength, setRowLength] = useState(5);
  const [colLength, setColLength] = useState(5);
  const [busyLength, setBusyLength] = useState(0);
  const [area, setArea] = useState(() => []);
  const [areaFree, setAreaFree] = useState(() => []);
  const [startSelect, setStartSelect] = useState(false);
  const [selectedLetter, setSellectedLetter] = useState([]);

  const meddium = (rowLength + colLength) / 2;

  const createArea = () => {
    const preArea = [];
    for (let i = 0; i < rowLength; i++) {
      let preRow = [];
      for (let e = 0; e < colLength; e++) {
        preRow.push({
          busy: false,
          letter: null,
          key: `${i}${e}`,
          x: i,
          y: e,
          init: false,
        });
      }
      preArea.push(preRow);
    }
    setArea(preArea);
    setAreaFree(preArea);
  };

  const preFillArrea = () => {
    return area.map((item, inx) => {
      return (
        <View key={inx} style={styles.area_row}>
          {item.length &&
            item.map((letter, index) => {
              return (
                <Pressable style={styles.letter} key={index}>
                  <Text key={index}>
                    {letter.key}
                    {letter.letter ?? ""}
                  </Text>
                </Pressable>
              );
            })}
        </View>
      );
    });
  };

  useEffect(() => {
    createArea();
  }, []);

  const freeCell = useMemo(() => {
    try {
      let l = 0;
      for (let i = 0; i < rowLength; i++) {
        for (let e = 0; e < colLength; e++) {
          if (!area[i][e]?.init) {
            l++;
          }
        }
      }
      return l;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }, [area, areaFree]);

  const getWord = () => {
    let word = null;
    if (freeCell < meddium) {
      word = testD[freeCell][0];
    } else {
      word = testD[meddium][0];
    }
    return word;
  };

  const getNearCell = (current_cell) => {
    try {
      let top =
        current_cell?.x === 0
          ? false
          : area[current_cell.x - 1][current_cell.y];

      let bottom =
        current_cell?.x >= colLength
          ? false
          : area[current_cell?.x + 1][current_cell?.y];

      let left =
        current_cell?.y === 0
          ? false
          : area[current_cell?.x][current_cell?.y - 1];

      let right =
        current_cell?.y >= rowLength
          ? false
          : area[current_cell?.x][current_cell?.y + 1];

      console.log("current_cell", current_cell);
      console.log("top", top);
      console.log("bottom", bottom);
      console.log("right", right);
      console.log("left", left);
      console.log("-----------------------------------");

      const next =
        right && !right?.init
          ? right
          : left && !left?.init
          ? left
          : bottom && !bottom?.init
          ? bottom
          : top && !top?.initial
          ? top
          : null;
      return next;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSelectedCellFromFreeArea = (cell) => {
    const cloneFreeArea = [...areaFree];
    const row = cloneFreeArea[cell.x];
    if (row.length > 1) {
      delete row[cell.y];
    } else {
      delete cloneFreeArea[cell.x];
    }
    setAreaFree(cloneFreeArea);
  };

  const fillArrea = () => {
    try {
      //если есть свободные ячейки то идем заполнять
      if (freeCell > 0) {
        console.log(areaFree, "areaFree");
        //рандомная стартовая позиция для слова
        const randomFreePosition =
          areaFree[0][getRandomInt(areaFree[0].length)];
        const word = getWord().name;
        let currentPosition = randomFreePosition;
        const cloneArea = [...area];
        for (let i = 0; i < word.length; i++) {
          if (i === 0) {
            cloneArea[randomFreePosition.x][randomFreePosition.y].init = true;
            cloneArea[randomFreePosition.x][randomFreePosition.y].letter =
              word[i];
          } else {
            const nextLetter = getNearCell(currentPosition);
            console.log(nextLetter, "nextLetter");
            cloneArea[nextLetter.x][nextLetter.y].init = true;
            cloneArea[nextLetter.x][nextLetter.y].letter = word[i];
            currentPosition = nextLetter;
          }
        }
        setArea(cloneArea);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.area}>
      <Text>{getRandomInt(5)}</Text>
      {logHelper(area)}
      <Pressable onPress={() => fillArrea()}>
        <Text>Create{meddium}</Text>
      </Pressable>
      <View>{preFillArrea()}</View>
    </View>
  );
};

export default GameFillword;

const styles = StyleSheet.create({
  area: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  area_row: { flexDirection: "row" },
  letter: {
    minWidth: minHW,
    minHeight: minHW,
    borderColor: "black",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#eee",
  },
});
