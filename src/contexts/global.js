import { finishLoading, startLoading } from './loader/slice';
import { openAlert } from './alert/slice';

export const wrapper = () => async (dispatch, cb) => {
    try {
        dispatch(startLoading());
        const response = await cb();
        dispatch(
            openAlert({
                severity: 'success',
                message: 'Opération réussie',
            })
        );
        return response.data;
    } catch (error) {
        dispatch(
            openAlert({
                severity: 'error',
                message: error?.message,
            })
        );
        return error;
    } finally {
        dispatch(finishLoading());
    }
};
