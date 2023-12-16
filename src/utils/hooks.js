import {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {loadUser} from '../redux/actions/action';
import axios from 'axios';
import { server } from '../redux/store';
import { getAdminProducts } from '../redux/actions/productAction';

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  navigateTo = 'login',
) => {
  const {loading, message, error, isAuthenticated} = useSelector(
    state => state.user,
  );
  console.log(isAuthenticated);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
      });
      dispatch({
        type: 'clearError',
      });
    }

    if (message) {
      navigation.reset({
        index: 0,
        routes: [{name: navigateTo}],
      });
      Toast.show({
        type: 'success',
        text1: message,
      });
      dispatch({
        type: 'clearMessage',
      });
    }
    dispatch(loadUser());
  }, [error, message, dispatch]);

  return loading;
};

export const useMessageAndErrorOther = (
  dispatch,
  navigation,
  navigateTo,
  func,
) => {
  const {loading, message, error} = useSelector(state => state.other);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
      });
      dispatch({
        type: 'clearError',
      });
    }

    if (message) {
      Toast.show({
        type: 'success',
        text1: message,
      });
      dispatch({
        type: 'clearMessage',
      });

      navigateTo && navigation.navigate(navigateTo);

      func && dispatch(func());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios
      .get(`${server}/products/categories`)
      .then(res => {
        setCategories(res.data.categories);
      })
      .catch(e => {
        Toast.show({
          type: 'error',
          text1: e.response.data.message,
        });
      });
  }, [isFocused]);
};



export const useAdminProducts = (dispatch, isFocused) => {
  const { products, inStock, outOfStock, error, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    dispatch(getAdminProducts());
  }, [dispatch, isFocused, error]);

  return {
    products,
    inStock,
    outOfStock,
    loading,
  };
};