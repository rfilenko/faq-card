import './style.scss';

//accordion
const detailsList = document.querySelectorAll('details');
detailsList.forEach((detail) => {
  const detailContent = detail.querySelector('div');
  const detailClosedHeight = detail.scrollHeight;
  detail.open = true;
  detailContent.style.setProperty(
    '--details-content-height-open',
    detailContent.scrollHeight + 'px'
  );
  detail.style.setProperty(
    '--details-height-open',
    detailContent.scrollHeight + detailClosedHeight + 'px'
  );
  detail.open = false;

  detailContent.style.setProperty(
    '--details-content-height-closed',
    detailContent.scrollHeight + 'px'
  );
  detail.style.setProperty(
    '--details-height-closed',
    detailClosedHeight + 'px'
  );

  detail.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const timeout = getComputedStyle(
      parent.querySelector('div')
    ).getPropertyValue('--details-transition-time');

    parent.classList.toggle('is--open');
    if (parent.open) {
      e.preventDefault();
      setTimeout(function () {
        parent.open = false;
      }, parseInt(timeout));
    }
  });
});
