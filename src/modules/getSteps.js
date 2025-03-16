import { createStepItem } from './createStepItem';

// getting and rendering steps
export function getProcess() {
  fetch('./data/processData.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((step, index) => {
        createStepItem({
          step: step,
          container: document.querySelector('.process'),
          isLast: index === data.length - 1,
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

getProcess();
