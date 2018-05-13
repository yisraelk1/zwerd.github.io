from shutil import copyfile
import shutil

shutil.copy('../_posts/2018-04-23-javascript-tutorial.md', './jsPost.md')
jsOldPost = open('./jsPost.md','r')
count = len(jsOldPost.readlines())
jsOldPost.close()


jsNewPost = open('./jsNewPost.md', 'w')
jsOldPost = open('./jsPost.md', 'r')
for i in range(count):
    jsNewPost.write(jsOldPost.readline())
    if i == count-6:
        jsOldPost.close()
        break


loopNum = int(raw_input("How much questions you want to write?: "))
string = ''

script = open('./quiz.js', 'w')
for a in range(1, loopNum+1):
    questionNum = int(raw_input("How much questions do you have so far?: "))
    questionLine = str(raw_input("please type the question line: ")).replace('<', '&lt;').replace('>', '&gt;')
    string += '<p class = "questions">'+str(questionNum+a)+'.'+questionLine +'</p>\n'
    for i in range(1,5):
        answer = str(raw_input("please type answer number " + str(i) + ": ")).replace('<', '&lt;').replace('>', '&gt;')
        correct = int(raw_input("is it the correct answer (1 for yes, 0 for no)?: "))
        string += '<input type="radio" id="mc" name="q'+str(questionNum+1)+'" value="'+str(correct)+'">' + answer +'<br>\n'

##for my js script
jsCount = loopNum + questionNum
jsString = ''
jsString += 'function check(){var answer = document.getElementById("answer");\nvar correct = 0\n'
for i in range(1,jsCount+1):
    jsString += 'var q' + str(i) +'= document.quiz.q'+str(i)+'.value;\n'
    jsString += "if(q"+str(i)+"== '1'){correct++};\n"

jsString += "answer.innerHTML='Your scor is: '+correct*100/" + str(jsCount)+";\n"


string += "\n\n\n\n" + "<script>\n"+jsString+"\n</script>"
string += "\n\n\n\n<br>\n"
string += '<input id = "button" type = "button" value = "End The Exam!" style="font-size:20px" onclick = "check();">\n'
string += '<p id="answer"></p>\n'
string += '</form>\n'

jsNewPost.write(string)
jsNewPost.close()
shutil.copy('./jsNewPost.md', '../_posts/2018-04-23-javascript-tutorial.md')




