import React from "react";
import style from "./Labels.module.scss";

const Labels = ({ posts }) => {
  let LabelsArray = [];

  if (posts.length !== 0) {
    posts.forEach((post) => {
      let label;
      post.post.forEach((item) => {
        if (item.__component === "post.info") {
          label = item.info_label;
        }
      });
      if (LabelsArray.indexOf(label) === -1) {
        LabelsArray.push(label);
      }

    });
  }

  return (
    <div className={style.Labels}>
      <div className={style.Labels_Title}>по темам</div>
      <div className={style.Labels_Wrap}>
      {LabelsArray.map((label, index) => (
        <Label label={label} key={index} />
      ))}
      </div>
    </div>
  );
};

const Label = ({ label }) => {
  return (
    <>
      {!!label && (
        <a href={`/${label}`} className={style.Labels__Label}>
          {label}
        </a>
      )}
    </>
  );
};

export default Labels;
