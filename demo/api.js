import { showToast } from '../apiExamples/showToast';

export function initToastApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    showToast();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initToastApiExamples(initCount + 1);
      }, 100);
    }
  }
}
