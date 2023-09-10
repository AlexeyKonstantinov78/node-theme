export const argsParseToDo = ([, , ...argv]) => {
  const args = {};

  const key = argv[0];
  argv.shift();

  if (argv.length > 0)
    args[key] = argv;
  else
    args[key] = true;

  return args;
};
