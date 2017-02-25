#include <stdio.h>

int main() {
  int insertionArray[5];
  insertionArray[0] = 32243;
  insertionArray[1] = 12;
  insertionArray[2] = 200;
  insertionArray[3] = 3;
  insertionArray[4] = 555;

  int j, i, key;

  for(j = 1; j < 5; j++) {
    key = insertionArray[j];
    i = j - 1;
    while (i > -1 && insertionArray[i] > key) {
      insertionArray[i + 1] = insertionArray[i];
      i = i - 1;      
    }
    insertionArray[i + 1] = key;
  }

  for(i = 0; i < 5; i++) {
    printf("%d\n", insertionArray[i]);
  }
  return 0;
}
