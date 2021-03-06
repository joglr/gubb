const exit = () => process.exit(1);

export function runTests(r, paths) {
  console.clear();
  paths.forEach((path) => {
    r(path);
  });
}

// const borderStyle = {
//   topLeft: chalk.grey('┌'),
//   topRight: chalk.grey('┐'),
//   bottomLeft: chalk.grey('└'),
//   bottomRight: chalk.grey('┘'),
//   horizontal: chalk.grey('─'),
//   vertical: chalk.grey('│'),
// };

export const test = (name, fn) => {
  global.console.log(name);
  fn();
};

export const assert = (desc, cond, exitFn?) => {
  let success;
  let errorObj;
  try {
    success = cond();
  } catch (e) {
    errorObj = e;
    success = false;
  }
  if (success) {
    global.console.log('PASS', desc);
  } else {
    global.console.log('FAIL', desc);
    const error = new Error(errorObj);
    const stackLines = error.stack ? error.stack.split('\n') : [];
    const line = stackLines ? stackLines[2] : 'N/A';
    const [, , lineNumber] = line.split(':');

    global.console.log(
      indent(
        reindent(cond.toString()),
        (line, n) =>
          ` ${
            chalk.blue(Number(lineNumber) + n)
            // + lineNumber
          } ${chalk.grey('│')} ${cardinal.highlight(line)}`
      )
    );
    const [line1, , line2] = stackLines
      ? stackLines.slice(2, stackLines.length - 6)
      : [];
    const lines = [line1, line2].join('\n');
    global.console.log(chalk.grey(lines));
    global.console.log('');
    typeof exitFn === 'function' ? exitFn() : exit();
  }
};

function indent(text, lineMapper = (line, _n) => `${' '.repeat(2)}${line}`) {
  const lines = text.split(/\r?\n\r?/).map(lineMapper);
  return lines.join('\n');
}

function reindent(text) {
  let indentationToRemove = Infinity;
  const lines = text.split('\n');
  const [firstLine, ...rest] = lines;
  rest.forEach((line) => {
    const indentation = line.length - line.trimStart().length;
    if (indentation < indentationToRemove) indentationToRemove = indentation;
  });

  return [
    firstLine.trimStart(),
    ...rest.map((line) => line.substring(indentationToRemove)),
  ].join('\n');
}

export default { test, assert };
