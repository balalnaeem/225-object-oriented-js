function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

function myBind(func, context) {
  let args = [].slice.call(arguments, 2);

  return function() {
    args = args.concat([].slice.call(arguments));
    return func.apply(context, args);
  }
}