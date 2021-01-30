import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { TextInput } from "react-native";
import Spacer from "../components/Spacer";

import { Context as LocationContext } from "../context/LocationContext";
import useSaveTracks from "../hooks/useSaveTracks";

const TrackForm = () => {
  const {
    state: { recording, name, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTracks] = useSaveTracks();

  return (
    <>
      <TextInput
        value={name}
        onChangeText={changeName}
        placeholder="Change Name"
      />
      {!recording ? (
        <Button title="Start Recording" onPress={startRecording} />
      ) : (
        <Button title="Stop Recording" onPress={stopRecording} />
      )}
      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Recording" onPress={saveTracks} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
