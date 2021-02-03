import React from "react";
import classnames from "classnames";

import style from "./Partials.module.scss";

export const PostInfo = ({ author, date, comments }) => {
  return (
    <div className={style.Partial__Info}>
      <div
        className={classnames(
          style.Partial__InfoBox,
          style.Partial__Author
        )}
      >
        Author: {author}
      </div>
      <div
        className={classnames(
          style.Partial__InfoBox,
          style.Partial__Comments
        )}
      >
        Comments({comments})
      </div>
      <div
        className={classnames(
          style.Partial__InfoBox,
          style.Partial__Date
        )}
      >
        Date: {date}
      </div>
    </div>
  );
};
