import { Gesture, GestureDetector } from "react-native-gesture-handler";

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import React, { useEffect, useState, useMemo } from "react";
import { View, Text, Pressable, StyleSheet, PanResponder } from "react-native";
import logHelper from "../../helpers/logHelper";
import testD from "./testD";
import getRandomInt from "../../helpers/random";
import CellItem from "./CellItem";

const minHW = 60;

const GameFillword = () => {
  const [position, setPosition] = useState({});
  const [words, setWords] = useState([]);
  const [ready, setReady] = useState(false);
  const [rowLength, setRowLength] = useState(6);
  const [colLength, setColLength] = useState(6);
  const [areaFree, setAreaFree] = useState(() => []);
  const [area, setArea] = useState(() => []);
  const [startSelect, setStartSelect] = useState(false);
  const [selectedLetter, setSellectedLetter] = useState([]);
  const startMedium = (rowLength + colLength) / 2;
  const [meddium, setMeddium] = useState(startMedium);

  const freeCell = useMemo(() => {
    try {
      let l = 0;
      for (let i = 0; i < areaFree?.length; i++) {
        for (let e = 0; e < areaFree[i]?.length; e++) {
          if (!areaFree[i][e]?.init) {
            l++;
          }
        }
      }
      return l;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }, [areaFree, area]);

  useEffect(() => {
    fillArrea();
  }, [areaFree, ready]);

  const createArea = () => {
    const preArea = [];
    for (let i = 0; i < rowLength; i++) {
      let preRow = [];
      for (let e = 0; e < colLength; e++) {
        preRow.push({
          busy: false,
          selected: false,
          guessed: false,
          letter: null,
          key: `${i}${e}`,
          x: i,
          y: e,
          init: false,
        });
      }
      preArea.push(preRow);
    }
    setArea(JSON.parse(JSON.stringify(preArea)));
    setAreaFree(JSON.parse(JSON.stringify(preArea)));
  };

  useEffect(() => {
    createArea();
  }, []);

  const getWord = () => {
    let word = null;
    if (freeCell < meddium) {
      const random = getRandomInt(testD[freeCell].length);
      word = testD[freeCell][random];
    } else {
      const random = getRandomInt(testD[meddium].length);
      word = testD[meddium][random];
    }
    return word;
  };

  const getNearCell = (current_cell, cloneArea) => {
    try {
      let top =
        current_cell?.x === 0
          ? false
          : cloneArea[current_cell.x - 1][current_cell.y];

      let bottom =
        current_cell?.x === colLength - 1
          ? false
          : cloneArea[current_cell?.x + 1][current_cell?.y];

      let left =
        current_cell?.y === 0
          ? false
          : cloneArea[current_cell?.x][current_cell?.y - 1];

      let right =
        current_cell?.y === rowLength - 1
          ? false
          : cloneArea[current_cell?.x][current_cell?.y + 1];

      let next = false;
      if (right && !right?.init) {
        next = right;
      } else if (left && !left?.init) {
        next = left;
      } else if (bottom && !bottom?.init) {
        next = bottom;
      } else if (top && !top?.init) {
        next = top;
      }
      return next;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSelectedCellFromFreeArea = async (cell, free) => {
    for (let i = 0; i < free?.length; i++) {
      for (let e = 0; e < free[i]?.length; e++) {
        if (free[i][e].key === cell.key) {
          if (free[i]?.length === 1) {
            console.log(free[i], i);
            free.splice(i, 1);
            return;
          } else {
            free[i].splice(e, 1);
            return;
          }
        }
      }
    }
  };

  const fillArrea = () => {
    try {
      //если есть свободные ячейки то идем заполнять
      if (freeCell > 0) {
        const free = JSON.parse(JSON.stringify(areaFree));
        let cloneArea = JSON.parse(JSON.stringify(area));
        const rPosition = free[0][getRandomInt(free[0].length)];
        const word = getWord().name;
        let currentPosition = rPosition;

        for (let i = 0; i < word.length; i++) {
          if (i === 0) {
            cloneArea[currentPosition.x][currentPosition.y].init = true;
            cloneArea[currentPosition.x][currentPosition.y].letter = word[i];
          } else {
            const nextLetter = getNearCell(currentPosition, cloneArea);
            cloneArea[nextLetter.x][nextLetter.y].init = true;
            cloneArea[nextLetter.x][nextLetter.y].letter = word[i];
            currentPosition = nextLetter;
          }
          deleteSelectedCellFromFreeArea(currentPosition, free);
        }
        setArea(cloneArea);
        setAreaFree(free);
        setWords([...words, word]);
      } else {
        return;
      }
      setMeddium(startMedium);
    } catch (error) {
      setMeddium(meddium - 1);
      console.error(error);
      setReady(!ready);
    }
  };

  const initData = async () => {
    var interval = setInterval(function () {
      if (freeCell === 0) {
        clearInterval(interval);
      }
      console.log("iniit", freeCell);
      fillArrea();
    }, 1000);
  };

  const gesture = Gesture?.Pan()
    ?.onBegin((e) => {})
    ?.onUpdate((e) => {
      console.log(e);
      setPosition(e);
    })
    .onEnd(() => {});

  return (
    <View style={{ flex: 1 }} nativeID="fillword">
      <GestureDetector gesture={gesture} style={styles.area}>
        <View style={{ flex: 1 }}>
          {area.map((item, inx) => {
            return (
              <View key={inx} style={styles.area_row}>
                {item.length &&
                  item.map((letter, index) => {
                    return (
                      <View key={index}>
                        <CellItem
                          letter={letter}
                          area={area}
                          position={position}
                        />
                      </View>
                    );
                  })}
              </View>
            );
          })}
        </View>
      </GestureDetector>
      <Text>x:{position?.x}</Text>
      <Text>y:{position?.y}</Text>
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
