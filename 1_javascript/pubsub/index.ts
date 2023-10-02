interface Subscriber {
  (payload: any): void;
}

class PubSub {
  subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers = [...this.subscribers, subscriber];
  }

  unSubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((item) => item !== subscriber);
  }

  notify(payload: any) {
    this.subscribers.forEach((subFn) => subFn(payload));
  }
}

const bbcNews = (data) => {
  console.log(`BBC News: the population of American is ${data} in 2023`);
};

const cnn = (data) => {
  console.log(`CNN News: the population of American is ${data} in 2023`);
};

const chinaMorningPost = (data) => {
  console.log(
    `China Morning Post: the population of American is ${data} in 2023`
  );
};

const pubSub = new PubSub();
pubSub.subscribe(bbcNews);
pubSub.subscribe(cnn);
pubSub.subscribe(chinaMorningPost);
pubSub.unSubscribe(cnn);
pubSub.notify(1500000);
