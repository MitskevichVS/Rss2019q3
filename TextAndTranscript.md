## English ##
Hi, my name is Victor and I’m here today to talk about jerrycript. So I’ll start of just talking a little bit about scripting language in IoT. I could answer your questions, but the problem is that I don’t see you, so just listen. 

Let I give you a little example.

Team A uses a scripting language to prototype a product. They discard prototype 1, then discard prototype 2, then prototype 3 shows viability and they decide to ship it to customers to get money flow, while working on optimizing the product to get that 10-years battery life.

Team B uses old good C. All this time they keep working on prototype 1, which, as we know, yet to be discarded, twice.
Which scenario do you like more? I think the answer is obvious.

So, jerryscript is a really lightweight javascript engine. It developed from scratch by Samsung and a few other developers. Jerryscript can run on microcontrollers, and he need more then 3kb of ram to do something, which is not just a hello world, for hello world 3kb is enough.

I told that is developed by Samsung, but now they have a small community around it. Various different companies contributing and it’s an open source project, you can find it on github.

One of the first questions usually is why do they want to run javascript on microcontrollers, why not just use C. And the motivation is javascript is a very popular language, it very easy to use and to learn in compare with C, and there are so many js developers, and they want to give them an opportunity to work with hardware without circles of hell with c. The other thing is the javascript being a high level language than c, so you can be more productive if you can write code fast for your applications. 

Key characteristic of jerryscript: One of the optimization key is to have low memory footprint, because heavy footprint require space, that we don’t have. Jerryscript don’t have compilation, only interpreted, because we don’t have space for that too. Low memory footprint we can get by compressed objects (object structure as compact as possible in engine) and compressed pointers (internally in heap we use 60 bit pointers). This two decisions allow to save a lot of memory. And they don’t have intermediate representation (abstract syntax tree), only directly to byte code. So result is compact byte code heavily optimized for low memory devices.

The main idea is to cut js code to atomic operations which is more simple and implement it by interpreter. Whole setup gives us a very compact representation on the byte code level.

About portability: it’s very important, jerryscript can run on different platforms, the engine is designed to be self-contained, have very small own c standard library, because of that you can run it on bare-metal. You don’t need any operating system or runtime support. Out of the box it support different boards like stm32, Arduino 101, photon, esp8266. One more is you can debug your project on your desktop.

Conclusion.

About Multilanguage future for IoT: Clearly, there’s a consensus set of top-tier IoT programming languages, but all of the top contenders have their own benefits and use cases. Java, the overall most popular IoT programming language, works in a wide variety of environments — from the backend to mobile apps — and dominates in gateways and in the cloud. C is generally considered the key programming language for embedded IoT devices, while C++ is the most common choice for more complex Linux implementations. Python, meanwhile, is well suited for data-intensive applications.

One site noted that, “While Java is the most used language for IoT development, JavaScript and Python are close on Java's heels for different subdomains of IoT development.”

Perhaps, the most salient prediction, though, turns up all over the web: IoT development is multi-lingual, and it's likely to remain multi-lingual in the future.

About Jerryscript: It’s hard to say that jerryscript is a killer in iot sector. But scripting language in embedded electronics have a place to be. For prototyping, or small devices that not required some extra speed or much memory it will be a good alternative. What is Iot device? For example – it is a voice controller, smart lock, some switch, or little robot, smoke alarm and other. Lighting system or door bell. I think you are agree that is not demanding devices in compare with some industrial sensors or industrial controllers. Considering that we have a huge pool of js developers worth a try this way of evolution in firmware development.

Another question relates to qualifications, because the development of software for microcontrollers requires additional knowledge, such as digital signal processing, knowledge of architecture, possibly even circuitry. But that is already beyond the scope of this presentation. personally, my opinion is the development of firmware is a rather complicated process, filled with interaction with circuitry and constructors.

Thanks for watching.

## Russian ##

Привет, меня зовут Виктор, и я сегодня здесь, чтобы поговорить о jerrycript. Итак, я начну с небольшого разговора о скриптовых языках в IoT. Я мог бы ответить на ваши вопросы, но проблема в том, что я вас не вижу, так что просто слушайте.

Давайте я приведу небольшой пример.

Команда A использует язык сценариев для создания прототипа продукта. Они отказываются от прототипа 1, затем отказываются от прототипа 2, затем прототип 3 демонстрирует жизнеспособность, и они решают отгружать его клиентам, чтобы получить деньги, одновременно работая над оптимизацией продукта, чтобы получить этот 10-летний срок службы батареи.

Команда B использует старый добрый C. Все это время они продолжают работать над прототипом 1, который, как мы знаем, еще предстоит отбросить, дважды.

Какой сценарий тебе нравится больше? Я думаю, что ответ очевиден.

Итак, jerryscript - это действительно легкий движок javascript. Он разработан с нуля компанией Samsung и несколькими другими разработчиками. Jerryscript может работать на микроконтроллерах, и ему нужно более 3 килобайт оперативной памяти для выполнения чего-то, что не является просто hello world, для hello world достаточно 3 килобайта.

Я сказал, что разработано Samsung, но теперь у них есть небольшое сообщество вокруг него. Различные компании вносят свой вклад, и это проект с открытым исходным кодом, вы можете найти его на github.

Один из первых вопросов обычно заключается в том, почему они хотят запускать javascript на микроконтроллерах, а не просто использовать C. И мотивация в том, что javascript - очень популярный язык, он очень прост в использовании и изучении по сравнению с C, и есть так много разработчиков js, и они хотят дать им возможность работать с железом без всяких проблем с С . Другое дело, что javascript является языком высокого уровня, по сравнению с С, поэтому вы можете быть более продуктивным, если сможете быстро писать код для своих приложений.

Ключевые характеристики jerryscript. Одним из ключевых факторов оптимизации является низкий необходимый объем памяти, так как большой объем требует места, которого у нас нет. У Jerryscript нет компиляции, только интерпретация, потому что у нас тоже нет места для этого. Низкий объем памяти, который мы можем получить с помощью сжатых объектов (структура объекта настолько компактна, насколько это возможно в движке) и сжатых указателей (внутри кучи мы используем 60-битные указатели). Эти два решения позволяют сэкономить много памяти. И у них нет промежуточного представления (абстрактного синтаксического дерева), только непосредственно в байтовый код. В результате получается компактный байт-код, который сильно оптимизирован для устройств с низким объемом памяти.

Основная идея состоит в том, чтобы сократить js-код до атомарных операций, что более просто, и реализовать его с помощью интерпретатора. Все это дает нам очень компактное представление на уровне байтового кода.

О переносимости: это очень важно, jerryscript может работать на разных платформах, движок спроектирован так, чтобы быть автономным, иметь очень маленькую собственную стандартную библиотеку С, поэтому вы можете запускать его на голом железе. Вам не нужна поддержка операционной системы или среды выполнения. Из коробки он поддерживает различные платы, такие как stm32, Arduino 101, photon, esp8266. Еще кое что - вы можете отладить свой проект на рабочем компе.

Вывод.

О многоязыковом будущем IoT. Очевидно, что существует консенсусный набор языков программирования IoT высшего уровня, но у всех главных претендентов есть свои преимущества и варианты использования. Java, самый популярный язык программирования IoT, работает в самых разных средах - от серверной до мобильных приложений - и доминирует в шлюзах и в облаке. C обычно считается ключевым языком программирования для встроенных устройств IoT, в то время как C ++ является наиболее распространенным выбором для более сложных реализаций Linux. Тем временем Python хорошо подходит для приложений, интенсивно использующих данные.

Один сайт отметил, что «хотя Java является наиболее используемым языком для разработки IoT, JavaScript и Python идут по пятам Java для различных поддоменов разработки IoT».

Тем не менее, пожалуй, самый важный прогноз появляется во всей сети: разработка IoT является многоязычной, и в будущем она, вероятно, останется многоязычной.

О Jerryscript: Трудно сказать, что Jerrycript является убийцей в этом секторе. Но скриптовому языку во встроенной электронике есть место. Для прототипирования или небольших устройств, которые не требуют дополнительной скорости или большого объема памяти, это будет хорошей альтернативой. Что такое IoT устройство? Например - это голосовой контроллер, умный замок, какой-то переключатель или маленький робот, дымовая сигнализация cистема освещения или дверной звонок  и прочее. Я думаю, вы согласны с тем, что это не требовательные устройства по сравнению с некоторыми промышленными датчиками или промышленными контроллерами. Учитывая, что у нас есть огромное количество разработчиков js, стоит попробовать этот путь развития в разработке прошивки.

Другой вопрос относится к квалификации, потому что разработка программного обеспечения для микроконтроллеров требует дополнительных знаний, таких как цифровая обработка сигналов, знание архитектуры, возможно, даже схемотехника. Но это уже выходит за рамки этой презентации. лично я считаю, что разработка прошивки - довольно сложный процесс, наполненный взаимодействием со схемой и конструкторами.

Спасибо за просмотр.
