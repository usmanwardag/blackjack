var storyContent = ﻿{"inkVersion":19,"root":[["^You wake up.","\n","^You don't remember who you are and where you are! But, there is a man nearby wearing a Gucci basketball hat holding a bunch of trivia cards.","\n","ev","str","^Ask the man where you are.","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^Ask the man who he is.","/str","/ev",{"*":"0.c-1","flg":4},{"c-0":["^ ",{"->":"askwhere"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["^ ",{"->":"askwho"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"askwho":[["^\"I am an evil genius, holding all your memory! I can also ALTER your PAST!\"","\n","ev","str","^How?!","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"askhow"},"\n",{"#f":5}]}],{"#f":1}],"askwhere":[["^\"Hehe, I won't tell you that.","\n","^But I will tell you that I am an evil genius, holding all your memory. I can also ALTER your PAST!\"","\n","ev","str","^How?!","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"askhow"},"\n",{"#f":5}]}],{"#f":1}],"askhow":[["^\"Good question!\", says the man as he shows you the trivia cards.","\n","^\"Answer the questions on these cards for me. If you get them right, you will be able to alter your past in any way you like!\"","\n","^\"If you get them wrong, I will choose your past for you >:D \"","\n","ev","str","^Play the game","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Ignore the offer","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"Round1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Ignore"},"\n",{"#f":5}]}],{"#f":1}],"add_story":[{"temp=":"x"},"ev",{"VAR?":"story"},{"VAR?":"x"},"+","/ev",{"VAR=":"story","re":true},{"#f":1}],"Ignore":[["^The man leaves. You stay at the same place for another eighty years, never learning about your past, and never able to leave the room, before eventually dying.","\n","end","ev","str","^Round 1","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Round1"},"\n",{"#f":5}]}],{"#f":1}],"Round1":[["^\"Okay, good luck!\", says the man. \"Here is your first question.\"","\n","ev",{"VAR?":"trivia_1"},"out","/ev","\n","ev","str","ev",{"VAR?":"trivia_1_1"},"out","/ev","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","ev",{"VAR?":"trivia_1_2"},"out","/ev","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","ev",{"VAR?":"trivia_1_3"},"out","/ev","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","ev",{"VAR?":"trivia_1_4"},"out","/ev","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ",{"->":"Lost1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Won1"},"\n",{"#f":5}],"c-2":["^ ",{"->":"Lost1"},"\n",{"#f":5}],"c-3":["^ ",{"->":"Lost1"},"\n",{"#f":5}]}],{"#f":1}],"Lost1":[["ev",1,4,"rnd","/ev",{"VAR=":"random_choice","re":true},"\n","ev",{"VAR?":"random_choice"},"/ev",["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r1_1"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r1_2"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r1_3"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],["du","ev",4,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r1_4"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],"pop","nop","\n","^*Evil laugh*.","\n","^\"Incorrect answer! Now I get to choose one of your past memories.\"","\n","ev","str","^Check your past","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"next1"},"\n",{"#f":5}]}],{"#f":1}],"Won1":[["^\"Nice, I didn't expect you to be good at this\", says the man in a *passive agressive* tone.","\n","^\"Go ahead and select from one of these memories, and they will be yours.\"","\n","^The man recites four options.","\n","ev","str","ev",{"VAR?":"r1_1"},"out","/ev","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","ev",{"VAR?":"r1_2"},"out","/ev","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","ev",{"VAR?":"r1_3"},"out","/ev","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","ev",{"VAR?":"r1_4"},"out","/ev","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ","ev",{"VAR?":"r1_1"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next1"},"\n",{"#f":5}],"c-1":["^ ","ev",{"VAR?":"r1_2"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next1"},"\n",{"#f":5}],"c-2":["^ ","ev",{"VAR?":"r1_3"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next1"},"\n",{"#f":5}],"c-3":["^ ","ev",{"VAR?":"r1_4"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next1"},"\n",{"#f":5}]}],{"#f":1}],"next1":[["^Here is the past that you have created so far:","\n","^***","\n","ev",{"VAR?":"story"},"out","/ev","\n","^***","\n","^\"Alriiiight, get ready for the next question. It will decide who you are!\", says the man.","\n","ev","str","^Next question","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Round2"},"\n",{"#f":5}]}],{"#f":1}],"Round2":[["^\"Here is the question. Think it through!\"","\n","ev",{"VAR?":"trivia_1"},"out","/ev","\n","ev","str","ev",{"VAR?":"trivia_2_1"},"out","/ev","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","ev",{"VAR?":"trivia_2_2"},"out","/ev","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","ev",{"VAR?":"trivia_2_3"},"out","/ev","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","ev",{"VAR?":"trivia_2_4"},"out","/ev","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ",{"->":"Lost2"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Lost2"},"\n",{"#f":5}],"c-2":["^ ",{"->":"Won2"},"\n",{"#f":5}],"c-3":["^ ",{"->":"Lost2"},"\n",{"#f":5}]}],{"#f":1}],"Lost2":[["ev",1,4,"rnd","/ev",{"VAR=":"random_choice","re":true},"\n","ev",{"VAR?":"random_choice"},"/ev",["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r2_1"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r2_2"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r2_3"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],["du","ev",4,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","ev",{"VAR?":"r2_4"},{"f()":"add_story"},"out","/ev","\n",{"->":".^.^.^.15"},null]}],"pop","nop","\n","^*Evil laugh*.","\n","^\"Incorrect answer! Now I get to choose one of your past memories.\"","\n","ev","str","^Check your past","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"next2"},"\n",{"#f":5}]}],{"#f":1}],"Won2":[["^\"Okay, gotta admit, that was a nice answer.\"","\n","^\"Go ahead and select from one of these memories, and they will be yours.\"","\n","^The man recites four options.","\n","ev","str","ev",{"VAR?":"r2_1"},"out","/ev","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","ev",{"VAR?":"r2_2"},"out","/ev","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","ev",{"VAR?":"r2_3"},"out","/ev","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","ev",{"VAR?":"r2_4"},"out","/ev","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ","ev",{"VAR?":"r2_1"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next2"},"\n",{"#f":5}],"c-1":["^ ","ev",{"VAR?":"r2_2"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next2"},"\n",{"#f":5}],"c-2":["^ ","ev",{"VAR?":"r2_3"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next2"},"\n",{"#f":5}],"c-3":["^ ","ev",{"VAR?":"r2_4"},{"f()":"add_story"},"out","/ev","^ ",{"->":"next2"},"\n",{"#f":5}]}],{"#f":1}],"next2":["^Here is the past that you have created so far:","\n","^***","\n","ev",{"VAR?":"story"},"out","/ev","\n","^***","\n","end",{"#f":1}],"global decl":["ev","str","^","/str",{"VAR=":"setting"},"str","^","/str",{"VAR=":"character"},"str","^","/str",{"VAR=":"story_start"},"str","^","/str",{"VAR=":"setting_related_choices"},"str","^","/str",{"VAR=":"story_conflict"},"str","^","/str",{"VAR=":"story_end"},0,{"VAR=":"win"},"str","^","/str",{"VAR=":"story"},0,{"VAR=":"random_choice"},"str","^","/str",{"VAR=":"born"},"str","^In which city were the 1992 Summer Olympics held?","/str",{"VAR=":"trivia_1"},"str","^Atlanta","/str",{"VAR=":"trivia_1_1"},"str","^Barcelona","/str",{"VAR=":"trivia_1_2"},"str","^Las Vegas","/str",{"VAR=":"trivia_1_3"},"str","^Sydney","/str",{"VAR=":"trivia_1_4"},"str","^Approximately how many times does a smartphone user touch their screen per day?","/str",{"VAR=":"trivia_2"},"str","^100","/str",{"VAR=":"trivia_2_1"},"str","^1150","/str",{"VAR=":"trivia_2_2"},"str","^2700","/str",{"VAR=":"trivia_2_3"},"str","^7000","/str",{"VAR=":"trivia_2_4"},"str","^How many stars does the Australian flag have?","/str",{"VAR=":"trivia_3"},"str","^4","/str",{"VAR=":"trivia_3_1"},"str","^5","/str",{"VAR=":"trivia_3_2"},"str","^7","/str",{"VAR=":"trivia_3_3"},"str","^9","/str",{"VAR=":"trivia_3_4"},"str","^How many seconds are in a day? YOU CAN'T USE A CALCULATOR!","/str",{"VAR=":"trivia_4"},"str","^86400","/str",{"VAR=":"trivia_4_1"},"str","^84400","/str",{"VAR=":"trivia_4_2"},"str","^84600","/str",{"VAR=":"trivia_4_3"},"str","^64600","/str",{"VAR=":"trivia_4_4"},"str","^In what year was McDonald's founded?","/str",{"VAR=":"trivia_5"},"str","^1895","/str",{"VAR=":"trivia_5_1"},"str","^1915","/str",{"VAR=":"trivia_5_2"},"str","^1955","/str",{"VAR=":"trivia_5_3"},"str","^1965","/str",{"VAR=":"trivia_5_4"},"str","^You were born in Ecuador, the youngest of 13 siblings. ","/str",{"VAR=":"r1_1"},"str","^You were born in Egypt, in a family of 6. ","/str",{"VAR=":"r1_2"},"str","^You were born in New York, a secret bastard child of Donald Trump. ","/str",{"VAR=":"r1_3"},"str","^You were born in Brazil. ","/str",{"VAR=":"r1_4"},"str","^You are a doctor in your late thirties, with a specialization in colonoscopy. ","/str",{"VAR=":"r2_1"},"str","^You are a lift operator in a building in Manhattan. ","/str",{"VAR=":"r2_2"},"str","^You are bodyguard for Barack Obama. ","/str",{"VAR=":"r2_3"},"str","^You play a clown on a TV show, watched by millions around the world. ","/str",{"VAR=":"r2_4"},"str","^You were born in Ecuador, the youngest of 13 siblings.","/str",{"VAR=":"r3_1"},"str","^You were born in Egypt, in a family of 6.","/str",{"VAR=":"r3_2"},"str","^You were born in New York, a secret bastard child of Donald Trump.","/str",{"VAR=":"r3_3"},"str","^You were born in Brazil.","/str",{"VAR=":"r3_4"},"str","^You were born in Ecuador, the youngest of 13 siblings.","/str",{"VAR=":"r4_1"},"str","^You were born in Egypt, in a family of 6.","/str",{"VAR=":"r4_2"},"str","^You were born in New York, a secret bastard child of Donald Trump.","/str",{"VAR=":"r4_3"},"str","^You were born in Brazil.","/str",{"VAR=":"r4_4"},"str","^You were born in Ecuador, the youngest of 13 siblings.","/str",{"VAR=":"r5_1"},"str","^You were born in Egypt, in a family of 6.","/str",{"VAR=":"r5_2"},"str","^You were born in New York, a secret bastard child of Donald Trump.","/str",{"VAR=":"r5_3"},"str","^You were born in Brazil.","/str",{"VAR=":"r5_4"},"/ev","end",null],"#f":1}],"listDefs":{}};