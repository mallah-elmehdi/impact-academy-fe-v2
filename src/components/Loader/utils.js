import { LOADER_INFORMATIONAL_TEXT, LOADER_INFORMATIONAL_TEXT_EMPLOYEE_REQUEST } from '../../constants/loader';
import { PAGES } from '../../constants/pages';

export const getLoadingTextData = (path, er_index, index) => {
    if (path === PAGES.employeeRequestForm.url) {
        return LOADER_INFORMATIONAL_TEXT_EMPLOYEE_REQUEST[er_index];
    }
    return LOADER_INFORMATIONAL_TEXT[index];
};
