export function createStepItem({ step, container, isLast }) {
  const processItem = document.createElement('div');
  processItem.className = 'process__item';

  const stepItem = document.createElement('article');
  stepItem.className = 'step';

  const stepCircle = document.createElement('div');
  stepCircle.className = 'step__circle';

  const img = document.createElement('img');
  img.src = step.img_url;
  img.alt = step.img_alt;

  stepCircle.appendChild(img);
  stepItem.appendChild(stepCircle);

  const stepText = document.createElement('p');
  stepText.className = 'step__text';
  stepText.textContent = step.step;
  stepItem.appendChild(stepText);

  processItem.appendChild(stepItem);

  const circlebox = document.createElement('div');
  circlebox.className = 'circleline';

  if (!isLast) {
    const circlebox = document.createElement('div');
    circlebox.className = 'circlebox';

    for (let i = 0; i < 5; i++) {
      const circleboxItem = document.createElement('div');
      circleboxItem.className = 'circlebox__item';
      circlebox.appendChild(circleboxItem);
    }

    processItem.appendChild(circlebox);
  }

  container.appendChild(processItem);
}
