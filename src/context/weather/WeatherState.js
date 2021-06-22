import React, { useReducer, useContext } from "react";
import axios from "axios";
import AreaContext from "./weatherContext";
import areaReducer from "./weatherReducer";
import AlertContext from "../alert/alertContext";
import {
  GET_AREAS,
  ADD_AREA,
  UPDATE_AREA,
  DELETE_AREA,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  SET_OFF_LOADING,
  
} from "../types";

const AreaState = (props) => {
  const alertContext = useContext(AlertContext);
  const initialState = { areas: [], currentArea: null, loading: false };
  const [state, dispatch] = useReducer(areaReducer, initialState);

  // get area
  const getAreas = async () => {
    try {
      const res = await axios.get("http://localhost:3000/areas");
      dispatch({
        type: GET_AREAS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // add area
  const addArea = async (data) => {
    setLoading();
    try {
      const res = await axios.post("http://localhost:3000/areas", data);
      alertContext.setAlert(
        `Área adicionada com sucesso`,
        "success",
        "3000"
      );
      dispatch({
        type: ADD_AREA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      alertContext.setAlert(
        `Não foi possível adicionar a área. Por favor tente novamente.`,
        "error",
        "3000"
      );
    }
  };
  // delete area
  const deleteArea = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/areas/${id}`);
      alertContext.setAlert(
        `Área ${id} apagada com sucesso`,
        "success",
        "3000"
      );
      dispatch({
        type: DELETE_AREA,
        payload: id,
      });
    } catch (err) {
      console.log(err);
      alertContext.setAlert(
        `Não foi possível apagar a área ${id}. Por favor tente novamente.`,
        "error",
        "3000"
      );
    }
  };
  // update area

  //Set current Area
  const setCurrent = (area) => {
    dispatch({
      type: SET_CURRENT,
      payload: area,
    });
  };

  //Clear current Area
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  //Update area
  const updateArea = async (id, area) => {
    setLoading();
    try {
      const res = await axios.patch(
        `http://localhost:3000/areas/${id}`,
        area
      );
      console.log(res.data);
      alertContext.setAlert(
        `Área ${id} actualizada com sucesso`,
        "success",
        "3000"
      );
      dispatch({
        type: UPDATE_AREA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      alertContext.setAlert(
        `Não foi possível actualizar a área ${id}. Por favor tente novamente.`,
        "error",
        "3000"
      );
      setOffLoading();
    }
  };


  const setLoading = () => dispatch({ type: SET_LOADING });

  const setOffLoading = () => dispatch({ type: SET_OFF_LOADING });

  return (
    <AreaContext.Provider
      value={{
        areas: state.areas,
        loading: state.loading,
        currentArea: state.currentArea,
        addArea,
        getAreas,
        deleteArea,
        setLoading,
        setOffLoading,
        updateArea,
        clearCurrent,
        setCurrent,

      }}
    >
      {props.children}
    </AreaContext.Provider>
  );
};

export default AreaState;
