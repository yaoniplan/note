- # 基本概念
	- ## page  
	  组织内容的基本单位是page(页面)  
	  在每一个page里，可以有很多block(块)
		- page名  
		  每一个page都有一个名字(比如：这个page的名字是[[logseq]])
	- ## block  
	  block可以无限嵌套block(有父子层级的关系)
	- ## Journals  
	  日记页面(自动创建page名为当天的日期的page)
		- 使用：打开[[logseq]]的时候，直接就可以记录
	- ## tag  
	  使用` #`(空格+井号+标签名)
	- ## 双向链接  
	  在page下面，会显示其他page中被链接到的block(比如：在这个page下面，会出现其他page中的与logseq相关的block)
	  记录想法的时候，需要提炼关键词(方便更精准的检索)
		- 使用：用两个双括号括起来(可以把关键词变成page)
	- ## 日常
		- 1.把Journals作为一切做笔记的入口(直接在Journals把想法写下来，然后用关键词做双向链接)
		- 2.与某件具体的事情有关，则直接按下ctrl+k，输入关键词，进去修改笔记
- # 基本使用
	- ## Journals
		- ### 1.later  
		  (输入)：  
		  ![2022_07_21_Screenshot from 2022-07-21 16-52-04.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad48125d72-6692-4c95-9b8d-0b6b23780a1c2022_07_21_Screenshot%20from%202022-07-21%2016-52-04.png?Expires=4811993633&Signature=F6TEpCkyiVOVN6wcXIFxex84H~Zy7aRSgcp~kY6X0twjHIYt0P3vr9wfY9cI37tKbS6vmmfOinnGK7B72OxOLMYZUphTOEyaVVgkN-CxnfDl1Tsv4DOIZbJJqMMCRfeXGM2zTuX3w1PcMnQd1WsCREavNk8QizhHUGXneWIu6hyJ~zZwLUze2-fO7H6jVzCpaHfexAr8HbZjl4eaFBTP4pXzbEFHbON89GBAmo4LqX6KoFAsYX3Zw1o3gZk5RHryBZF2Fujum4pLJdRvYF1ciZK6k7WHXFmVukUdFHlnDXyq6HoKXT8KAYLD6EETdrDfaZ~UbizWfUCwm~H3fxSlvg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  回车：  
		  ![2022_07_21_Screenshot from 2022-07-21 16-52-32.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262adfd78a668-484f-4122-a029-1043f84b89e42022_07_21_Screenshot%20from%202022-07-21%2016-52-32.png?Expires=4811993689&Signature=eSvYtBv41d6jHtiBF~0iPUG8qrm4xxt~7Q~NOPh2jzTZmaIDmb~kpgwQlOsWsMTkGE04w28BKqWyN2YHYGWmBIldN35VsiTxyIM7E9~60N40xCkd9xstyWC5OIPSUnHkknpf5wzGaDkjuPythOyMBVOoWVA2DO5dJep-s0Nzm9b02J0imiweJ0HKgUVpR2km5WsZ1jkR3wgTkMdGPjQHm8~UiiiEMh7jd5HJ4WcO2wDWhSZRt5eSW4ZFpDW-4f3uWT8ZwRgdR8wsfUEqmMa2ySM3AUqEhf3dYy276lxsr~nWfER~Nyg6ADjsh~YckQTH0-GaPlVqe5Bj6tq7AUYA6g__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 2.link  
		  (输入)：  
		  ![2022_07_21_Screenshot from 2022-07-21 20-31-51.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad4005bdf3-634b-4b75-bfd9-285f721edda32022_07_21_Screenshot%20from%202022-07-21%2020-31-51.png?Expires=4812006908&Signature=flTfGvHWyCy7H~pooSRbhzV5QZAKGiipN~09ANizCSgMH-lciSWkMqHi2CPccTlGBWj-afGCJBwyj-Iuo3SJuRP4z-NnkcuO4zmc4uELjMxpWufn~7~MqlcWdl-UH0B45a7tCvW9SUYGrKzzavrNqueOayDtyfGrOy1OQMj4avy~fBESRvK3zevQnuvyZOEcQU~RXqu9VV~qQEkbpI-aru9a8eiRV50NBIdEt~1DMpoNRItFE1GrJuGLri41XSXwl4BGDSUYIrgGlefGNDt1A9nZSnHVOnWgzp2PJJPQL8JH8K8GakBspFvMUmgRqHhZT9xionUpGNSz~1mUKRFxXQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  [[检索]]按下ctrl+k，输入关键词Dashboard，在Todo就可以看到  
		  ![2022_07_21_Screenshot from 2022-07-21 20-34-07.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad49965067-849c-44ca-8980-68f775550a1d2022_07_21_Screenshot%20from%202022-07-21%2020-34-07.png?Expires=4812007035&Signature=gqLK2xpZ14pTpDsyRXtJrs6hSUjOb14ATGdyGLIvqUR2ZzDAzfWVNSQ~nvU3mPbmhbKQ7hUm86u~LvKH1Vx6t401lF5WAbqiAEJfeOtUgZitetukNn9ZTd8SxIqa~6lo4Ye6aS~W1XG8MPasiWPm3zExnnRHYrOonImTw-fGAoJB2muulEOAeHmUhnF5~fI~wQncmEm5HrAuzKosWE51Mzswxqp0HWAU~4a5v3wqCq6U-iKJDgP81fByI5GDVBgFygs6pwolsbl~gfzeCFDhcjCIkYtMuS-0OoxjmOBTV~D7v52n9bTWCYvFXg5ZslDBpul3lD5jWatw7Rx4pZli0A__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 3.writing  
		  输入：  
		  ![2022_07_21_Screenshot from 2022-07-21 19-52-23.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad755ce509-c1ed-4c51-b244-817315624d8a2022_07_21_Screenshot%20from%202022-07-21%2019-52-23.png?Expires=4812009523&Signature=M4b28dQJGtWYWnqkqM5xblajOw87~~0tQOIyKxt8-B8B8JhqxFw1mHRfOEexX-7RrPw-o5vhQ53cO~QlOLbT4ms0Zv8aQLZg0aW6W2GjShr5ed43uEjApZRbFhnwbUTep0OYhqN0JsJxpSfEvDKMJY28DIj~SF~XewXzSZfOZQUZSLunCIf7DePaMAoHiFLXE2nYnu076srxuKE~8iKenfwucWqOHDAzQH6gehDRFha8ZZYgFdNLzuB8Vl5siUqUEG4ZuHzksvtbgeFlqFl62hMWJoaJvPkBWs9wFl7yVTZDeZwDPYNz8hyVOCkbFCxzsNDyK5cLz44~nsU1JXl1xw__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA) 
		  回车：  
		  ![2022_07_21_Screenshot from 2022-07-21 19-51-24.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad830767f4-30cf-43ea-b98e-9bcd739d542b2022_07_21_Screenshot%20from%202022-07-21%2019-51-24.png?Expires=4812004388&Signature=TQEriQvpMvv1QY8ytQPGOd2pDqdtPoUJFkvla3hXgF2fSq-3QDOAqpGGlXCEnf6DjNlkt7hBkL9W-cafW4g-K3kKYCHLZ3MjCMz5modNh9pNBYC6CGIpnqWpG2H4MdgaPSmH3JIJBk~H1mCBj0E6LmuwvBXM1p6UdMUBT91hEyUB6FJiO-f82Wm4YMaeN328eRpXGfCIqIlvT-jTkjr2TXucLAMCC1O5GOHoOMexUR2lLYpoyJ5NIkKHMB65qWc1SZWSn801D7pMbDYd56V4hFyosPNGzfN4UFhh~jWqUG~69~1MESdZyqikbjsEBgdX4lNaa3jOHM2rPV7jdvbsQg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 4.random-thought  
		  输入：  
		  ![2022_07_21_Screenshot from 2022-07-21 20-08-49.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad86ce80f3-ad4f-4413-8c35-eb92870e3e132022_07_21_Screenshot%20from%202022-07-21%2020-08-49.png?Expires=4812005436&Signature=LL8Wv-bdTcFR74wph-I5WBHqZ1pGKHMd3yeOaVIiQnTtJoJX2d-uyN0QaCxW4-fAppQn6Lsqg15y~vc6-rRFos9DmeBITZZwgg4vHQc-bkPT5mdC7THvnf8~Lk~lAhGdPN-o7xP0OcD4-k5OYJSRWEbRMDcSophfEtQbXxF5EUzStqkHuuLr5QA5xjh2PM-rAF9udFe2iQ7osD2K~ndVXaMUvyICEN0xrfX4Gyc9OVbFQv8d~VmD-gIYG2sTTJzhnBeoAu913SrHwzTNRaEqiNZgCZ1G933qXBC43gKdduxR4-ZLg4HdSfBiqPuS5DB0nrR~37i80HDdQYhs6jSTTA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  回车：  
		  ![2022_07_21_Screenshot from 2022-07-21 20-03-07.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad42d0fa89-a45c-4f44-8df0-9e811ec51a3a2022_07_21_Screenshot%20from%202022-07-21%2020-03-07.png?Expires=4812005454&Signature=gu4~Rn0aS5YQB~NWdm79XYNMH~cv8jqgLEmXatTBwfREG30DPM5~8AJqfl27JlnqmaJSGeszy3MY2entYuzwysgbpEys7F2qUJ-EWoPjaf6Y4haRqf0qzyVRkBlWW2LXF6Rk9GAF0r-SlaVoO1mqIvFNOQpcmNVRogcxjNuByTwxL36IAYPp65OVdPRZmvHWDvJW2~IbUvJ2kxh9B~jHxoZKFort7b4qQ12dOj42NbFyxee5KOPo1~AsvW0GsxrxpEX1ApAIK43mmsQKucHr24z15lh7RG1wr7brclnqVRjEenjGLOSwF7Bqo-OfTg9S3ajX21AEnCLyPvo-KiH5XQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  进入random-thought，并收藏random-thought这个页面  
		  ![2022_07_21_Screenshot from 2022-07-21 20-20-12.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ade7a0bffb-461e-43fe-9110-85b437a0dc602022_07_21_Screenshot%20from%202022-07-21%2020-20-12.png?Expires=4812006181&Signature=YDAcFg0EizRYo9ebZNW673AjpigSS6MA7irck4vEItO54AuKScfHfjqsdOxjTQgoKaAo3mAbTimWQkLtqOzER3RTi-6uk2g5LWHPosRzZOZroa7qi3zKpRCKAROqE1PDYVDE9R~3FJEtdKL9UWq8feKdc7Ywu46ErF1~lsqFptKkai0FstTn2dIaJD7~U-XGobusWqnlXJYB6fzBzc9UKnIvO5AxqiWNDBEWyTSd6Ybe7GeKlws3So7-8qqOMwBCYysTA2BC6ZmTQOB0JoEfRTwwOTdJc0fXq9hvxn~s1~r6THCDXriAXWU9qLqiby2JiOMW3DNqVEpqp9bQgxbTcA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 5.quote  
		  输入：  
		  ![2022_07_21_Screenshot from 2022-07-21 20-16-31.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262adea367e8f-2797-4396-bbb8-30b607276d212022_07_21_Screenshot%20from%202022-07-21%2020-16-31.png?Expires=4812005863&Signature=gbXpMQsht0Npe5lMHJmfzzbw3cFx-7mmoV1wTm~s0QKDxWfLW1HBlneDWtWB6EWxieiSmUeiMdI842YYnaNIY~KhiPogVK-saqgOB~Xtby4stgy-oQHkWjto5L5J5vHasTqH8NN8RTWcEorNpOWzA9rjqvIBtCjSRWYjTfEU568MWADNUw~5HU3Tf~AoNGHZfiatlEXnEZ~erqVFJl36gioUBWmTp57V6uPwxDYTOI~Hr1yksLHoIA1rridfwy6EDqLdM1073KFC8J59qSqYI4MBT6tMlaJcFp-g3Cl3JypawtkHPC7DhnCR~54mwy5S5hK81lJOb~YkEJ4c1MRI2g__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  回车  
		  ![2022_07_21_Screenshot from 2022-07-21 20-16-51.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad433f5fc8-7109-4f3d-88b5-14d5edee5fa42022_07_21_Screenshot%20from%202022-07-21%2020-16-51.png?Expires=4812005882&Signature=BxMeImmxpV478Qjs0ksWwjfyccbwdKcyXcvAz648Zp-saYmNa-XP~Lw5CswpsxZ86GcKsmBAbFuzVgsSpieV6XV8pBM3cHhgwqZexvFJVjMzy0BLvTcza7rI1o55fYN8MYSLOlHvCDNPtwfR0qixpqubXx8uzSTsiTFwXpRbv38YgWvuRLZaxKqb4LfjvDEPvavuIEkdO2Cjlz9GnJc-4g9aw7KPOOZpjpxqVsUtbeSySnhaiebrtWZ-uG1BhcKiuriq3d-g2U5EBE~jWB2w7jXY6QJ1gTnQDZ30b~8o9NDv-yUpS1wd1jjpaDPXed7PKAV1hAkiEHaMEiFDcPs8aA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  进入quote，并收藏quote这个页面  
		  ![2022_07_21_Screenshot from 2022-07-21 20-20-12.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262add41e7aa2-c346-453f-87b5-d72cea8b86f72022_07_21_Screenshot%20from%202022-07-21%2020-20-12.png?Expires=4812006093&Signature=bxMKnL82pqzl0cLR5vdoPUbuSmIGCTGfMFDrBI-ysGkq-RQAUW6DvnP~~PyGuF3iDdCp4qrMDRZPbqh1az4-lejKEAtK-gKBD4xHUpq81-7kZPCm33Al35L8mm2BtID4BzaAgE01gXfrwDH0HHszsS9EBHVwR4BI34TwvuWoTRFvjycIGFhqWynKR3I94Be27qNOKn4g4wiqs09YRIJkQ4EaNyUVW0jM7P3J9pZZV-yBGqmQXSpHxHE9w07Q7bAhmfFiURedmT~mWwI~K-eiID5RCDh5A4jyKlv2PKJ31Np1FgQ2-XjKJa7oeYpGohQwQqqHBde0FSlYNmZSj1eS7g__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
	- ## Dashboard
		- [[检索]]按下ctrl+k  
		  ![2022_07_21_Screenshot from 2022-07-21 20-56-39.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ade2c49ae3-6b08-49aa-b05e-b33f7f745e702022_07_21_Screenshot%20from%202022-07-21%2020-56-39.png?Expires=4812008261&Signature=nxvGVEzRMmF1LnJxtFaO~ak2zkwSEHQ4i9c~Zos~6VBL2LAh-xqGpKbYI5eXkxDq12co-3fx17q5cTJ1gLcBfthnYxSRAfN7DzpkYInHz-TWMHyeguI~vG55t3VHxyYj7XfmWtClxK~1KpiQT04ejW3BdbwrYoVZs6FatN-Th~DBe58C3FoHGUB~snaDoddxC3xvqklQDaLpIheO~bBb7InVy~-cvvFXas~h9sfS4UrGve7tARnXvwm22eeTdwm8sJ7-ZT2HP2aUowefkaxTVdiX87mM3H0A-AUb6WdoDC~yMPzJi7PDGmldYuHNc54d3rA0-8QyeCCXCrJj~xKuKg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  输入Dashboard，然后回车，就可以开始下面的步骤了  
		  ![2022_07_21_Screenshot from 2022-07-21 20-57-15.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad01462345-28b5-4d8b-9291-b552a51e1cae2022_07_21_Screenshot%20from%202022-07-21%2020-57-15.png?Expires=4812008331&Signature=abbf5AtmskflnUzRl~iRZrRY9WIK-NTVdQCQlxzsOoGC3-IJizrdaAI-ubuXwBg-zTMgdb6RqcWWJmr~0lRO~U7XDWT7KjtQ3bBsOwqU~Dcx9YvDPvmGExmeJ-1YMkKowVSboMPWTt1gYkndtRvgxlwjMrvmdJwERl3zDPkDrZpqbYRK977S~3U5dZTqb1X0cm-M3EYA1KN-R9LbmYPXUy6DWZYjPxhB2zNSdwAazCNHK527CEDpzuwTyCQGZACGjxS~pMm851UcvtME7wkRqybZEUNVHfdsQ1Kd-hdqKwsFLaH7rDebrVHNDTgRAIO6mvYjyy3Xw69A2Z~7yAo1fQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 1.Todo
			- 1.写下一个：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-34-58.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad8083541d-0838-436f-b46e-4d65ab8b94b22022_07_21_Screenshot%20from%202022-07-21%2016-34-58.png?Expires=4811992737&Signature=B9xAUdOOeQYnROC~WUPsofz8WKrTpQlATJLdGZnVUy0t7-MT4g~FPG5zzN7Z6nMeKawTIv8upoOtU8sqDuwBcaXRt53dh8fGMt6Zt79v7uIehxNMUtzAYxEkRUpoQNnkl7wr7YiZoeIXtFqIBk2AOWlOoUkMPDer-PNO8aYcccSGbXeNPdA~nbAsdIsjwFALhPajDfI8S9EhdtRl~NyUvGHdS2dpvG3wcpPzi9K-OdbvnQzM3mP3jpoifJDe7MmAxsvYg~TFqhzayJXnSzR3til7svPKHxh599smxFb573DF2oXDfevEjrHsNIvYBkeK7j--k7SzVcyjiqzKCgbdbA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  2.回车：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-37-12.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad45efcb5e-6ff6-4f67-b5cf-13fb184caa562022_07_21_Screenshot%20from%202022-07-21%2016-37-12.png?Expires=4811992755&Signature=UARhwaMRMXAScXm6f~aX0mSGiJZm3-hV7kZAM049Cj2wvjn4QnIt73CLWT3lwV6E5zQGjcQsyle6CzppUzyBxB3jVZRmMJWF5V0hZjJ07lT1Z6j8FaIdg1lIMgplKsHMmO3gtF1pg3euKa-V~yzVEQJ-sgXzrHqm-~LNm3MiSedZwL7YIzkPyRwPrCsdVfpkGTKv1CQoa~yvCC4VsBLpVorfXhtNlj3KS35Uf2JaCov32BLZyFiUulPXEdkscERYBDm90MgSoHHg62a5aPfLjg--MBtMG0hPl2St80MhnI6xHk4woEY2G7CufHGB29Vp04zZBdtvfLoR~vLXjgbD~Q__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  3.查询的条件：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-40-25.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad8284848c-eb09-4b5e-92ea-05008296624f2022_07_21_Screenshot%20from%202022-07-21%2016-40-25.png?Expires=4811992857&Signature=LaHuqpXWCIouuZhcLCPP9BzPSEhwjjZsupMf32N8AQntNPWE3OszIzMimBcgu39E16pVhs9zw6fqsmd~xSIlsX24aKMBUYaicOk9ny5Wr1YNySQxOV0qP~tef2~ZL-196FBFhzv7b83n~tBI~bioWMKzRA9XSTSYRNG7GG3JK3wsdGN~FbttCbHLeR7x6JZpxzE6kUA3robM-idNmAcAsvqu3MDFwlfYICC9o1dHMsWsmj4LDm-Hfec~XDrLq9G5gONF7MsZs~EZGbrgXsSGgj93FRaxWMoRW4B4Nulx9CQCpf9XGmc0QsSFj6bEWE7F9O7FRevuGi08CPqjXbrNkQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  4.todo分几种不同的状态：这里是later(稍后要做的)  
			  ![2022_07_21_Screenshot from 2022-07-21 16-44-34.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad940d75ab-2f44-4752-a8fe-f0d27a91f5ff2022_07_21_Screenshot%20from%202022-07-21%2016-44-34.png?Expires=4811993157&Signature=Yu~MgY7H13p5ouyzZEYh5AwEBNDBgHrwFMcjVAiRWNX~RH5z~ta1U64rhkoOJD-~aLfmeq-TSrcBRNKbiDawRIC~Z0557cvfBoXbnmm6DK6mGhmzunGO6P2uVw8tkq07gaA5SqFrCIORxMgoYr91nbgoe6ynZU8Lafj-kynEPLAc76fe4YTNUf1OqOkfQ4YmxAUadMkHMhi4V-xgbTndTC8LaRGMxcCTp9moitTadDXHzI24bW-qZ8FgHjJk-lgpq5tnVdnUcc~tOXPXu6lEtxO6Le0AntACM9hmhpHHXwU2p9OjaSjwcaFi7ewACESheY7ZjTF~Qcsa7X~SiPXQAg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  5.回车(则会展示单独地[[block]])：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-48-21.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad2c3f10c6-9407-42b7-83fd-ef8b707de3ec2022_07_21_Screenshot%20from%202022-07-21%2016-48-21.png?Expires=4811993321&Signature=ea3-611WZbUjLrNaAcQt~gu9e0kSJcwN3hHRT-m2dlRlihG6Wmo~MZEXQ~dLCKerG9IOEOR33rzOnVdbHIk~ZEM-06qAOViX4Ne-GVpkfwYpzXSVKygDaSaAdao1-OpoQym7-uXUZqX9mStGofJ4SE6zNpjCD0U9zTkLOC0VwhT73yeYIAvSuhu768K89u61MrdAwG8dmyDaCTF3RMdMz2T-WpQLOMeXCm4pE7IDsBAEkdcNc0aLGhiBqHbMTpdiHaH1pKp0X6Mh82U41v3lKn~Z1nfooItZNDfMc65d2u6KCQJfZEo2S-i2k1yuCe4cdaCjOHfX~CKXm-U0dtXJhA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 2.In progress
			- 重复Todo中的步骤1、2、3
			- 将步骤4中的later替换成now，并回车  
			  参考：  
			  ![2022_07_21_Screenshot from 2022-07-21 17-18-49.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad1c08c836-49b0-4aa9-949f-b3d98205795f2022_07_21_Screenshot%20from%202022-07-21%2017-18-49.png?Expires=4811995162&Signature=AahxJJfLnq1m5-d0DGaKb74KAR5wLc0Y8uKGXqQianIbzr3OwFP34j1DTI4djAK9S8-g-5wYALBM4MItpr-mx15eI4H~a5unHUIkQ2orBL5fBfKYryjs4SwND-MyZVJGPM56fwW0tRPLxUZYXW5X6mXGz5hpaxn1pWfCHMDoiW-JMI~SpUmgH38EZ-SHHDiV4hfEXmL9IxQgeocx0q4C5i04AM2yiuZ0Abkshje5wZiPpmd0MLrHjzZO2Szyn2yHYHHrQfE6wXLPMlKalhJPp1rGIhx1ZM~biKfXiugLxTY5HtASpsJ-uHoVxgijuyjIFkDhTbNx-7sc5IuMeojxHw__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 3.Writing plan
			- 重复Todo中的步骤1、2、3、4
			- 用and关键词括起来  
			  ![2022_07_21_Screenshot from 2022-07-21 17-45-59.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262adcb8faa40-6158-4778-a4ee-e3489e6dd14a2022_07_21_Screenshot%20from%202022-07-21%2017-45-59.png?Expires=4811996790&Signature=VMck3rwrZpITlwqFKxFjRQ9JXz0LKMQ4GSym66N30k~lTuqSOtw2LlKGTEd1DYf8EofMwvedoIqXkTEPn4HHvmuzvR1VFRCCuANR27C0ttBhtOTYZpaB37G-Z~Cf4dIzDHabN7o2xqiLRfDrCyN6UUvbrzhnYiL4B-~OugDzPJWibTGmqbfyNNo4HuMRMKioMZ~AvrCW~dM3O6Iz5i8dmaxROTvxOuQczIygQUbz8sabKPqNhpZwt~3cnJG5G8pIhnljSCq9jwgrIVjy0gs54s8~L0WaBzASs-TrluUlc41EpZt8rTWREOTBBgj4~vATtaUZAmJwxC1Qykwr3ztdKQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
			- 其次，用两个方括号把writing括起来  
			  ![2022_07_21_Screenshot from 2022-07-21 17-48-55.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad2dbe015d-630e-4222-ab32-e5c56aa4564d2022_07_21_Screenshot%20from%202022-07-21%2017-48-55.png?Expires=4811997042&Signature=jjxsWdvZo1d2mHXkDqQl-ynBC7yzwCXXLxE7BUxsBq~o5fK7pa-2cuzXOidkYheqztpb0nUxxq2F4ccH9P5w1wkspaEcVnm6VnZRliyaLpYxY67-I24voX6s3nuAVG2s0TzWdQje~EqReCkCZiPqG0eDS~u490zMo7G2mtDwCvWFNXAofK5VRpfbXkDgM0jgIukmNmqdcW2z0E0exxUiPDtOGm9MH4DwM8-vxYsGi0byBKhe9UDeS9It4WCB7Xqabjq0cJNXgSzbuEzSvOoCHicVVUssVkPetHAEmq-gho8~1XDFj05-PM8v4uqbIfoz2IJqH2BfnSfZMnJbU4YQSA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  回车后，参考：  
			  ![2022_07_21_Screenshot from 2022-07-21 17-50-19.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad1c858c46-cb67-4d3b-ba98-adf4046208552022_07_21_Screenshot%20from%202022-07-21%2017-50-19.png?Expires=4811997072&Signature=FFsV0tXPurucrvwRESd~AzUo-Bm8xcHqEsag5OCIm4oTYF07sRERZOg0DpyhbU7cVyRd9MAinUr6ORguaJUyyZUskFYmrZpD6YTJLoMCFuM4DkrhAJbYNfqYd5CDM3ca~RpDCMcbUnIhZlJMhGt2gyo2IY7lva1I~sJoW-G~m8csFRTljHFzRDiDQw2BfKXOWw0BBr-67To8h7Tl4AEhoqJ83Uv12eRimqzqMY2nRrfgg9HquvAqgvOE7nq2W2k5rj0sUFvBQXd18u760vLd4THWdh86dgzOUEjSw-3N85tU0-wDAG3xoloazvymx2~YwbOCS0soUC~~3FeSBxWMeQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
	- ## sync  
	  使用 [[Git]] 和 [[github]] 同步 [[logseq]]
		- ### 1. 新建一个仓库  
		  ```
		  #在github上，记得勾选 add a README file
		  ```
		- ### 2. 安装 [[Git]]  
		  ```
		  sudo pacman -S git #这里以 archlinux 举例
		  ssh-keygen #需要按几次回车  
		  cat ~/.ssh/id_rsa.pub #复制 SSH 密钥，粘贴至github设置中的 SSH keys 中
		  git clone 以git开头的仓库克隆地址 #克隆远程仓库到本地
		  yes #确认连接
		  ```
		- ### 4. 修改  
		  ```
		  #修改之前，打开logseq
		  #设置-多版本控制-开启 Git 自动 commit
		  #重启
		  #最后就可以在logseq中愉快的玩耍(修改)了
		  ```
		- ### 5. 提交
		  ```
		  git add . #全部添加修改到缓存区  
		  git config --global user.email "这里输入注册github的邮箱" #对Git进行一些本地配置
		  git config --global user.name "这里输入github账号名" #对Git进行一些本地配置
		  git config -l #查看配置信息，其实就是Git的配置文件 .gitconfig
		  git commit -m '这里输入提交的备注' #将缓存区的修改提交到版本区  
		  git branch -avv #查看全部分支信息
		  ```
		- ### 6. 推送  
		  以上步骤完成后(即logseq自动commit)，需要手动 git push
		  ```
		  git push #将本地仓库的新增commit，推送到远程仓库
		  ```
- # 参考资料
	- [我如何使用 Logseq 管理我的生活和笔记](https://www.bilibili.com/video/BV1X44y1K7X1?spm_id_from=333.337.search-card.all.click)
	- [Git 与 GitHub 入门实践](https://www.lanqiao.cn/courses/1035)
	-