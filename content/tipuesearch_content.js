var tipuesearch = {"pages": [{'title': 'About', 'text': '3/27test \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'w9', 'text': '算出平均成績 \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\nurl2 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6.txt"\nurl3 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6-2.txt"\nurl4 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/075c06b2baf1bb07665f1a98e9f88f7e81ebe1a4/1aw8.txt"\nurl5 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw9.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\ndata2 = open(url2).read().split("\\n")\ndata2 = data2[1:]\ndata3= open(url3).read().split("\\n")\ndata3 = data3[1:]\ndata4= open(url4).read().split("\\n")\ndata4 = data4[1:]\ndata5= open(url5).read().split("\\n")\ndata5 = data5[1:]\nstud = []\nscore1 = []\nscore2 = []\nscore3 = []\nscore4 = []\nscore5 = []\nfor i in data:\n    #print(i)\n    stud.append(i.split(":")[0])\n    if i.split(":")[1] == "缺考":\n        score1.append(0)\n    else:\n        score1.append(int(i.split(":")[1]))\n\nfor i in data2:\n    #print(i)\n    if i.split(":")[1] == "缺考":\n        score2.append(0)\n    else:\n        score2.append(int(i.split(":")[1]))\n\nfor i in data3:\n    #print(i)\n    if i.split(":")[1] == "缺考":\n        score3.append(0)\n    else:\n        score3.append(int(i.split(":")[1]))\n\nfor i in data4:\n    #print(i)\n    if i.split(":")[1] == "缺考":\n        score4.append(0)\n    else:\n        score4.append(int(i.split(":")[1]))\n\nfor i in data5:\n    #print(i)\n    if i.split(":")[1] == "缺考":\n        score5.append(0)\n    else:\n        score5.append(int(i.split(":")[1]))\nfor i in range(60):\n    print(stud[i], (int(score1[i])+int(score2[i])+int(score3[i])+int(score4[i])+int(score5[i]))/5) \n 40723224 61.2 40823116 66.4 40823128 0.0 40823139 32.0 40823152 75.6 40823153 76.8 40823218 45.2 40823246 53.6 40828213 33.6 40828236 0.0 40828237 0.0 40828242 0.0 40828244 0.0 40840167 0.0 40871106 7.2 41023301 60.0 41023302 49.6 41023305 44.0 41023306 69.2 41023307 78.4 41023308 49.6 41023309 74.4 41023310 29.6 41023311 76.8 41023312 69.6 41023314 66.4 41023315 79.2 41023316 73.6 41023317 65.6 41023318 16.8 41123101 78.4 41123102 62.4 41123103 0.0 41123107 62.4 41123112 0.0 41123116 72.0 41123118 35.2 41123120 13.6 41123121 56.8 41123122 84.8 41123124 56.8 41123125 13.6 41123129 78.0 41123131 68.4 41123132 68.0 41123133 54.8 41123134 40.4 41123135 74.4 41123136 45.6 41123137 78.4 41123139 85.6 41123140 56.8 41123141 62.0 41123142 56.0 41123143 59.2 41123144 87.2 41123145 30.4 41123146 13.6 41123148 68.4 41123149 85.6 \n 利用brython讀取url中的資料 \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\nfor i in data:\n    #print(i)\n    stud = i.split(":")[0]\n    score =  i.split(":")[1]\n    print(stud, score) \n', 'tags': '', 'url': 'w9.html'}, {'title': 'nginx設定', 'text': 'git clone 倉儲 要與html同階級 \n \n 修改config 將root由html改為site-40823218 \n \n 防火牆設定 \n \n 啟動nginx.exe測試 \n \n 確認可由IP進入靜態網站 \n \n', 'tags': '', 'url': 'nginx設定.html'}, {'title': 'w12 putty', 'text': '下載putty \n \n 打開putty.exe修改設定 \n \n 設定proxy \n \n 開啟psftp.exe 用mkdir創建.ssh資料夾 \n 使用putty open 剛剛設定的stud2.cycu.org \n 使用mkdir創建public_html再把倉儲clone到site資料夾 \n \n 輸入cat > 新增.gitconfig 並輸入內容 \n \n 設定proxy \n \n 測試網站是否可以開啟 \n \n', 'tags': '', 'url': 'w12 putty.html'}, {'title': 'W13在stud2建立動態網站', 'text': '開啟ipv6 \n \n 在 stud2 主機建立倉儲的動態系統: \n ssh \xa0wcm40823218@stud2.cycu.org 登入後, 以ssh-keygen 在 .ssh 目錄下建立 id_rsa, \xa0 id_rsa.pub \n \n sftp  wcm40823218@stud2.cycu.org \xa0登入後, cd .ssh 然後以 put \xa0 config \xa0 將代理主機的設定檔案送到 stud2 帳號下的 .ssh 目錄, 使用 get id_rsa.pub 將公鑰取下送到 Github 帳號下的 settings 中的 SSH and GPG 設定區. \n \n \n ssh 登入帳號後, 在所在目錄 /home/帳號/, 以 git clone  git@github.com:mdewcm2023/site-40823218.git \xa0site \n cd site \n 利用 chmod u+x acp , 將 acp 設為 user 可以執行 \n \n 以 sftp get 取下 repo 目錄下的 waitress_server.py \n 在 Windows 編輯 waitress_server.py, 之後存為 server.py, 再送回 repo 目錄下 \n \n ssh 遠端登入到 site 目錄下, 執行 hupper3 -m server.py \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13在stud2建立動態網站.html'}]};