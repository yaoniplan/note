- 基础概念
	- 组织内容的基本单位是[[page]]页面
	- 在每一个[[page]]里，都可以有很多行(其实不叫行，叫[[block]]块)
	- 这些[[block]]本身是支持[[嵌套]]，可以无限[[嵌套]][[block]]，有一个父子层级的关系
	- 每一个[[page]]都有一个基本的名字，此时这个[[page]]的名字是[[logseq]]，而
	- 日记页面，journal[[page]]，每天以当天的日期，自动创建一个页面[[page]]，很重要的一个工具，
		- 好处：不用先梳理要记得的东西是什么，创建[[树状的结构]]，再从[[树状的结构]]里去找相应的主题，再进行记录，而打开[[logseq]]的时候，直接在当天的[[page]]写一些东西
	- 使用[[logseq]]具有[[双向链接]]功能的笔记时，不仅仅记录想法，而要思考现在记录的这条笔记在将来，如何更精准的把它[[检索]]回来
		- [[关键词]]，用两个双括号括起来(可以把关键词变成[[page]]，点击[[关键词]]，就可以记录一些跟[[关键词]]相关的一些笔记)
		- [[双向链接]]，这个[[page]]，如果在别的[[block]]被链接到的话，是可以在这个[[page]]中，能看到
		- [[检索]](ctrl+k)，[[关键词]]比如[[logseq]]，就可以看到有一个叫做[[logseq]]的[[page]]，
			- 好处：可以看到[[logseq]]这个[[page]]，曾经记得笔记以及跟[[logseq]]相关的[block]内容；在写作的时候，可以补充内容(根据[[双向链接]])
	- 第一个标准，把[[Journals]]这个[[page]]作为一切做笔记的入口就是，直接在[[Journals]]这个[[page]]里把我的想法写下来，然后在[[关键词]]做一个[[双向链接]]
		- 好处：不需要先把相关内容找出来，然后再填充内容，没有任何心智负担(去找这个笔记应该在哪里的)
	- 除非是跟具体的某一事情是有关的，才会直接[[检索]][[logseq]]，比如说：我正在写[[logseq]]的基本概念，跟[[logseq]]有强烈的关系，那才会直接[[检索]][[logseq]]，然后进去，记录笔记
- 基本使用
	- [[Journals]]
		- 打开[[Journals]]，把想法记录下来，(变成一个计划任务）
			- 方法1(输入)：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-29-59.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad5b2fed3e-d69c-4e2b-8a49-643927195f4a2022_07_21_Screenshot%20from%202022-07-21%2016-29-59.png?Expires=4811992237&Signature=YYnlqPvopeS1mlSYMe~UOSWdDxjU3hqHTYE2cXkkDIOQkI8j3b0r86yXenvOgRxQkd-YQLB8jt-I2MdGc5P33QvKC2ax9mB71CVWmMMEIQ9Xhwjbg5R6p-mdW9ByprWKJIbnodjWOeXF~-QeAVMBK~1aoI8p63jaB9J1QdimPTgDyIut~7F9XHzZlJBsr86VmfdRjRi-8xr2nnbl3jtdw8GckNZcGi6--qbCgdiE7Hqb59v8Phk-ke~Nk7AxXHQjiqRqIQhu1fScA~CkVHrD4kKQo7rrkPeeGpWXzi4~43ZE1MGsi8tWY5Ah74R6XbY5TaFqF8l-L6vHdJSkZCcdFg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)   
			  然后回车：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-24-07.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad395d6a52-f437-4c6b-be10-2ef2dccd42152022_07_21_Screenshot%20from%202022-07-21%2016-24-07.png?Expires=4811991895&Signature=iiaoGc~53taJxxNs1UPSfa9IbLIcH9NlnrYU8Fh66tJi~2wSlFbVlP36ypCQ7bDYv71qG4HcQkmCJ6spGURpNht7XI7aWVGvOAJ6IeTy06I00d9nCYvKQ64hNVl7CHQPov6MYdGva3lcH-hOSH2WrXnuLzWqMFeVNPdEtTGpbpsH-LS-rA61YztrhffkIgwOIzCrhRdZOdoqUa-Xm6TLFmjiBDHzohyRxdMPLv0RDVWzFxvDUIVY8LII7p38iUppAS4OovsSkfEFJ1~cd3Y7v5uSiEMNGrkx-iFLIoxF0HP7TmMp63iYDmQvM-oJ8-16elQ4fstApaQTV052ZJ1f7Q__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
			- 方法2(输入)：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-52-04.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad48125d72-6692-4c95-9b8d-0b6b23780a1c2022_07_21_Screenshot%20from%202022-07-21%2016-52-04.png?Expires=4811993633&Signature=F6TEpCkyiVOVN6wcXIFxex84H~Zy7aRSgcp~kY6X0twjHIYt0P3vr9wfY9cI37tKbS6vmmfOinnGK7B72OxOLMYZUphTOEyaVVgkN-CxnfDl1Tsv4DOIZbJJqMMCRfeXGM2zTuX3w1PcMnQd1WsCREavNk8QizhHUGXneWIu6hyJ~zZwLUze2-fO7H6jVzCpaHfexAr8HbZjl4eaFBTP4pXzbEFHbON89GBAmo4LqX6KoFAsYX3Zw1o3gZk5RHryBZF2Fujum4pLJdRvYF1ciZK6k7WHXFmVukUdFHlnDXyq6HoKXT8KAYLD6EETdrDfaZ~UbizWfUCwm~H3fxSlvg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  回车：  
			  ![2022_07_21_Screenshot from 2022-07-21 16-52-32.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262adfd78a668-484f-4122-a029-1043f84b89e42022_07_21_Screenshot%20from%202022-07-21%2016-52-32.png?Expires=4811993689&Signature=eSvYtBv41d6jHtiBF~0iPUG8qrm4xxt~7Q~NOPh2jzTZmaIDmb~kpgwQlOsWsMTkGE04w28BKqWyN2YHYGWmBIldN35VsiTxyIM7E9~60N40xCkd9xstyWC5OIPSUnHkknpf5wzGaDkjuPythOyMBVOoWVA2DO5dJep-s0Nzm9b02J0imiweJ0HKgUVpR2km5WsZ1jkR3wgTkMdGPjQHm8~UiiiEMh7jd5HJ4WcO2wDWhSZRt5eSW4ZFpDW-4f3uWT8ZwRgdR8wsfUEqmMa2ySM3AUqEhf3dYy276lxsr~nWfER~Nyg6ADjsh~YckQTH0-GaPlVqe5Bj6tq7AUYA6g__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- 写作相关  
		  :LOGBOOK:
		  CLOCK: [2022-07-21 Thu 16:28:47]--[2022-07-21 Thu 16:28:49] =>  00:00:02
		  CLOCK: [2022-07-21 Thu 16:28:51]--[2022-07-21 Thu 16:28:51] =>  00:00:00
		  CLOCK: [2022-07-21 Thu 16:28:52]--[2022-07-21 Thu 16:28:53] =>  00:00:01
		  :END:
		  输入：  
		  ![2022_07_21_Screenshot from 2022-07-21 19-48-21.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad197b6209-dc63-4bf4-af21-f49f4643e9a92022_07_21_Screenshot%20from%202022-07-21%2019-48-21.png?Expires=4812004141&Signature=P7IlARBXZAwjH~nxSaJUi25RqcdjYuoCvtFr~wPtPdD0EFIyyyr7OQmbrm5hfU3os0TsV07qnzzofc86o4wggVE6r5zESdlN1kgKCg2t~esC9OIF6ANhnCdZFy~DyLmGJluej2YsMoTw~oTuh9IUA0bq1NRQpBU0Vw2wZTZ5EPjsF4s360jd5SEUbHydrRDmVqZqORRY6GoFjmjlybksIzcHNsIEqZ5F6YTdBl7ROunZaM9FttpDSGEU43Ai8wXqT-swHwRrqIivIKnfpsgAk9YlCg8S~nSEkDnE0dvOBc1MvQ5NKL3WZwoiS20Cc2Y2iw~hAw0EY3aFW4mnWa5Z7A__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)   
		  回车：  
		  ![2022_07_21_Screenshot from 2022-07-21 17-42-24.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad92818d38-39ee-4d53-bf4b-551311219b8d2022_07_21_Screenshot%20from%202022-07-21%2017-42-24.png?Expires=4811996560&Signature=d-abYmYNM31lw7Q0KX1BDKwOz6GlVFm~U1O~J323lr9xalV-g6WZcoiwQGNq90~cl1KpwCTz~cuHGuSGwPfp-JiZ7tSusjwfJ0BGk6MbY0A7t0PvL42s0tcUQllqUkx0QIuKvAUyynqRmzrwpAnAeHSNF2i7YGEbKrV9mC26onFhSXvJCDXyiqnIwf2G7zyTFsUojzuo8niWi100SE-Y0x4f2ynyZk35fe6-m7yxkrW4vRP2az~1pqWBsnKjK2n0YcqoQdFynxggTsUPKfx4mJVFAXt8q~w0kIwbCFzJhKG9SP84tDXMpXSBbWoGjIwlYdSnLLJBdgv-cjpiY2XH7g__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- 关于使用
		-
	-
	-
	-
	- [[Dashboard]]
		- [[Todo]]
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
		- [[in progress]]
			- 重复[[Todo]]中的步骤1、2、3
			- 将步骤4中的later替换成now，并回车  
			  参考：  
			  ![2022_07_21_Screenshot from 2022-07-21 17-18-49.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad1c08c836-49b0-4aa9-949f-b3d98205795f2022_07_21_Screenshot%20from%202022-07-21%2017-18-49.png?Expires=4811995162&Signature=AahxJJfLnq1m5-d0DGaKb74KAR5wLc0Y8uKGXqQianIbzr3OwFP34j1DTI4djAK9S8-g-5wYALBM4MItpr-mx15eI4H~a5unHUIkQ2orBL5fBfKYryjs4SwND-MyZVJGPM56fwW0tRPLxUZYXW5X6mXGz5hpaxn1pWfCHMDoiW-JMI~SpUmgH38EZ-SHHDiV4hfEXmL9IxQgeocx0q4C5i04AM2yiuZ0Abkshje5wZiPpmd0MLrHjzZO2Szyn2yHYHHrQfE6wXLPMlKalhJPp1rGIhx1ZM~biKfXiugLxTY5HtASpsJ-uHoVxgijuyjIFkDhTbNx-7sc5IuMeojxHw__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- [[Writing plan]]
			- 重复[[Todo]]中的步骤1、2、3、4
			- 用and关键词括起来  
			  ![2022_07_21_Screenshot from 2022-07-21 17-45-59.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262adcb8faa40-6158-4778-a4ee-e3489e6dd14a2022_07_21_Screenshot%20from%202022-07-21%2017-45-59.png?Expires=4811996790&Signature=VMck3rwrZpITlwqFKxFjRQ9JXz0LKMQ4GSym66N30k~lTuqSOtw2LlKGTEd1DYf8EofMwvedoIqXkTEPn4HHvmuzvR1VFRCCuANR27C0ttBhtOTYZpaB37G-Z~Cf4dIzDHabN7o2xqiLRfDrCyN6UUvbrzhnYiL4B-~OugDzPJWibTGmqbfyNNo4HuMRMKioMZ~AvrCW~dM3O6Iz5i8dmaxROTvxOuQczIygQUbz8sabKPqNhpZwt~3cnJG5G8pIhnljSCq9jwgrIVjy0gs54s8~L0WaBzASs-TrluUlc41EpZt8rTWREOTBBgj4~vATtaUZAmJwxC1Qykwr3ztdKQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
			- 其次，打上一个[[writing]]的[[tag]]  
			  ![2022_07_21_Screenshot from 2022-07-21 17-48-55.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad2dbe015d-630e-4222-ab32-e5c56aa4564d2022_07_21_Screenshot%20from%202022-07-21%2017-48-55.png?Expires=4811997042&Signature=jjxsWdvZo1d2mHXkDqQl-ynBC7yzwCXXLxE7BUxsBq~o5fK7pa-2cuzXOidkYheqztpb0nUxxq2F4ccH9P5w1wkspaEcVnm6VnZRliyaLpYxY67-I24voX6s3nuAVG2s0TzWdQje~EqReCkCZiPqG0eDS~u490zMo7G2mtDwCvWFNXAofK5VRpfbXkDgM0jgIukmNmqdcW2z0E0exxUiPDtOGm9MH4DwM8-vxYsGi0byBKhe9UDeS9It4WCB7Xqabjq0cJNXgSzbuEzSvOoCHicVVUssVkPetHAEmq-gho8~1XDFj05-PM8v4uqbIfoz2IJqH2BfnSfZMnJbU4YQSA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
			  回车后，参考：  
			  ![2022_07_21_Screenshot from 2022-07-21 17-50-19.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad1c858c46-cb67-4d3b-ba98-adf4046208552022_07_21_Screenshot%20from%202022-07-21%2017-50-19.png?Expires=4811997072&Signature=FFsV0tXPurucrvwRESd~AzUo-Bm8xcHqEsag5OCIm4oTYF07sRERZOg0DpyhbU7cVyRd9MAinUr6ORguaJUyyZUskFYmrZpD6YTJLoMCFuM4DkrhAJbYNfqYd5CDM3ca~RpDCMcbUnIhZlJMhGt2gyo2IY7lva1I~sJoW-G~m8csFRTljHFzRDiDQw2BfKXOWw0BBr-67To8h7Tl4AEhoqJ83Uv12eRimqzqMY2nRrfgg9HquvAqgvOE7nq2W2k5rj0sUFvBQXd18u760vLd4THWdh86dgzOUEjSw-3N85tU0-wDAG3xoloazvymx2~YwbOCS0soUC~~3FeSBxWMeQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
-