#include <stdio.h>
#include <string.h>
#include <stdlib.h>

unsigned int flip_words(char string[]) {
  int i;
  int j;
  int x;
  int sent_len = strlen(string)-0 * (sizeof(char));
  char *newstring = (char *) malloc(sent_len);
  strcpy(newstring,string);
  for(i=sent_len;i>=-1;i--) {
    if (((string[i])==' ') || (i==sent_len) || (i==-1)) {
      for (j=i+1;j<i+1+x;j++) {
        printf("%c",string[j]);
      }
      if (j!=i+1) { 
        printf(" ");
      }
      x = 0;
    }
    else { 
      x++;
    }
  }
}



int main() {
  char array[999];
  printf("\n");
  fputs("enter a sentence to flip: ", stdout);
  fflush(stdout);
  if ( fgets(array, sizeof array, stdin) != NULL )
  {
    char *newline = strchr(array, '\n'); /* search for newline character */
    if ( newline != NULL )
    {
      *newline = '\0'; /* overwrite trailing newline */
    }
  }
  int x=strlen(array);

  printf("\n\n");
  flip_words(array);
  printf("\n\n");
  return 0;
}

