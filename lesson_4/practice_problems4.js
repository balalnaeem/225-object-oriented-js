function myBind(func, ctx) {
  return function() {
    return func.apply(ctx, arguments);
  };
}

function func(arguments) {
  // some code
}

function myBind(context) {
  return function(arguments) {
    return func.apply(context, arguments);
  };
}