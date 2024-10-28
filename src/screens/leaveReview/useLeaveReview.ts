import {useEffect, useState} from 'react';
import {LeaveReviewParams, TabNavigatorProps} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {leaveReview} from '../../redux/slices/orderSlice';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const useLeaveReview = (params: LeaveReviewParams) => {
  const navigation = useNavigation<TabNavigatorProps>();
  const dispatch = useAppDispatch();
  const [reviews, setReviews] = useState<{foodId: string; rating: number}[]>(
    [],
  );
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(params.reviews[0].name);
  const [picUrl, setPicUrl] = useState(params.reviews[0].picture);
  const [rating, setRating] = useState(0);
  const ratings = [1, 2, 3, 4, 5];
  const loading = useAppSelector(state => state.orders.loading);

  useEffect(() => {
    setName(params.reviews[index].name);
    setPicUrl(params.reviews[index].picture);
    setRating(0);
  }, [index]);

  const updateOrAddReview = (foodId: string, newRating: number) => {
    setReviews(prevReviews => {
      const reviewIndex = prevReviews.findIndex(
        review => review.foodId === foodId,
      );
      if (reviewIndex !== -1) {
        const updatedReviews = [...prevReviews];
        updatedReviews[reviewIndex].rating = newRating;
        return updatedReviews;
      } else {
        return [...prevReviews, {foodId, rating: newRating}];
      }
    });
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    const currentFoodId = params.reviews[index].foodId;
    updateOrAddReview(currentFoodId, newRating);
  };

  const onSubmit = async () => {
    const res = await dispatch(leaveReview({orderId: params.orderId, reviews}));
    if (res.meta.requestStatus === 'fulfilled') {
      navigation.navigate('My Orders');
    }
  };

  const onNext = () => {
    if (rating < 1) {
      Toast.show({text1: 'Please give a rating'});
      return;
    }
    setIndex(prevIndex => prevIndex + 1);
  };

  return {
    ratings,
    onSubmit,
    picUrl,
    handleRatingChange,
    loading,
    rating,
    setRating,
    onNext,
    name,
    index,
  };
};

export default useLeaveReview;
