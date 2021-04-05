let notifications = [
  "desktop-notification-1",
  "desktop-notification-2",
  "desktop-notification-3",
  "desktop-notification-4",
  "desktop-notification-group-ring",
  "desktop-notification-group-mail",
  "desktop-notification-group-ring",
  "desktop-notification-group-mail"
];

let singleNotifications = [
  "desktop-notification-1",
  "desktop-notification-2",
  "desktop-notification-3",
  "desktop-notification-4"
];

let firstMobileNotification = true;

window.setInterval(function () {
  // randomly pick an id of the example notifications
  // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  let randomNotificationId = notifications[Math.floor(Math.random() * notifications.length)];

  if (randomNotificationId === 'desktop-notification-group-ring' || randomNotificationId === 'desktop-notification-group-mail') {
    randomGroupNotification(randomNotificationId);
  } else {
    randomSingleNotification(randomNotificationId);
  }
}, 3000);

function randomSingleNotification(randomNotificationId) {
  // find the copy the div of the notification
  let singleNotification = document.getElementById(randomNotificationId).cloneNode(true);
  singleNotification.removeAttribute('id');
  singleNotification.addEventListener('click', evt => clickSingleNotification(singleNotification));
  // randomly set the left and top style of the notification's position
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  let left = Math.floor(5 + Math.random() * 70) + '%';
  let top = Math.floor(5 + Math.random() * 75) + '%';
  singleNotification.style.left = left;
  singleNotification.style.top = top;
  // add the new random notification to desktop-container div
  document.getElementById('desktop-container').appendChild(singleNotification);
}

function randomGroupNotification(randomNotificationId) {
  let groupNotification = document.getElementById(randomNotificationId).cloneNode(true);
  groupNotification.removeAttribute('id');
  groupNotification.addEventListener('click', evt => clickNotificationGroup(groupNotification));
  let left = Math.floor(5+ Math.random() * 70);
  let top = Math.floor(5 + Math.random() * 75);
  groupNotification.style.left = left + '%';
  groupNotification.style.top = top + '%';
  // set image of ring or email notification group
  if (randomNotificationId === 'desktop-notification-group-ring') {
    groupNotification.style.backgroundImage = 'url(images/notifications/ring_' + (Math.floor(Math.random() * 3)) + '.jpg)';
  }
  document.getElementById('desktop-container').appendChild(groupNotification);
}

function clickNotificationGroup(notification) {
  notification.remove();
  for (let i = 0; i < 3; i++) {
    let randomNotificationId = singleNotifications[Math.floor(Math.random() * singleNotifications.length)];
    randomSingleNotification(randomNotificationId);
  }
}

function clickSingleNotification(notification) {
  notification.remove();
}

// for mobile
window.setInterval(function () {
  let mobileNotification;
  if (firstMobileNotification) {
    mobileNotification = document.getElementById('mobile-notification-1').cloneNode(true);
  }
  else {
    mobileNotification = document.getElementById('mobile-notification-2').cloneNode(true);
  }
  firstMobileNotification = !firstMobileNotification;
  mobileNotification.removeAttribute('id');
  mobileNotification.style.position = 'static';
  mobileNotification.addEventListener('click', function () {
    mobileNotification.remove();
  });
  document.getElementById('mobile-container').appendChild(mobileNotification);
}, 3000);