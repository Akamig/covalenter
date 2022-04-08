const subscribe = async (url: string) => {
  let response = await fetch(url);
  if (response.status == 502) {
    await subscribe(url);
  } else if (response.status != 200) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await subscribe(url);
  } else {
    let message = await response.text();
    console.log(message);
    await subscribe(url);
  }
};

export { subscribe };
