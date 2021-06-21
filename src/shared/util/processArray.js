import moment from "moment";
import { MONTH, MONTHFORMAT, TIME } from "../../constants/constants";

export const filterArray = (array, filterType, value) => {
  return array.filter((transaction) => {
    let transactionMonth = moment(transaction.date)
      .startOf(MONTH)
      .format(MONTHFORMAT);

    return filterType
      ? filterType === TIME
        ? transactionMonth === value
        : transaction[filterType].includes(value)
      : transaction.tags.includes(value) ||
          transaction.teams.includes(value) ||
          transactionMonth === value;
  });
};
