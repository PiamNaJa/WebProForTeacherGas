const mongoose = require('mongoose'),
      Artist = require('./models/artist'),
      Album = require('./models/album'),
      User = require('./models/user'),
      Playlist = require('./models/playlist'),
      Song = require('./models/song');

const SlipknotSong = [
        {
            image : "https://i.ytimg.com/vi/h_htyBV4XWM/hqdefault.jpg",
            name : ".execute.", 
            genre : "Rock",
            fav : 2,
            lyric : `It appears that we have reached the edge, that zenith where stimuli and comatose collide
            Forty years ago, the man proclaimed the age of the gross to be upon us, and even though the man was destroying our heritage and insulting our intelligence
            That era has become very real
            We labor for pleasure and abhor the guilt of pressure
            My generation will go down as the architects of contemporary disgust
            Some have fought and died
            Others have allowed the strong to be butchered for a price they themselves don't care about and will never understand
            I myself am beleaguered by the selfish face of a kind of man that is not mankind
            Distrust in information
            Fundamentalism of opinion
            Catastrophic boredom, and a fanatical devotion to that which does not matter.
            Where is your glory now, people?
            Where are your gods and politicians?
            Where is your shame and salvation?
            You rage for no reason because you have no reason
            What have you ever fought for?
            What have you ever bled for?
            The face of the earth is scarred with the walking dead
            The age of the gross is a living virus
            This is the future you have created
            This is the world you have set ablaze
            All your lies are coming true
            All freedom is lost
            All hope is gone`,
            audio : '/demo/Slipknot/Execute.mp3'
        },

        {
            image : "https://i.ytimg.com/vi/mSDwgb8ZIyk/maxresdefault.jpg",
            name : "Gematria (The Killing Name)", 
            genre : "Rock",
            fav : 6,
            lyric : `12/08/73
            That was all I got and now you got me
            All I ever really wanted was to take the blame
            I will go down in history and not down in flames
            Meningitis,
            I will survive this,
            Dry sockets and a schizophrenic crisis
            The time of the nine has begun
            Get out of the way or you will suffer as one
            This is so typical,
            Apocalyptical,
            Hanging on abysmal release,
            Jesus,
            I don't need this,
            Don't wanna be this,
            Icon in the making,
            My hands are fucking shaking
            What if god doesn't care?
            What if god doesn't care?
            Remember,
            Surrender,
            The time is now
            Continue,
            We're in you,
            And we will burn your cities down
            America is a killing name
            It doesn't feel or discriminate
            Life is just a killing field
            It's all that's left, nothing's real
            Throw away your disposable past
            And fall apart like a cigarette ash
            We are the fatal and vital ones of the world
            And we will burn your cities down
            What if god doesn't care?
            What if god doesn't care?
            America is a killing name
            It doesn't feel or discriminate
            Life is just a killing field
            It's all that's left, nothing's real
            Throw away your disposable past
            And fall apart like a cigarette ash
            We are the fatal and vital ones of the world
            And we will burn your cities down
            Down,
            We will burn your cities down
            We will burn your cities down
            We will burn your cities down
            Feed the hungry, feed them shit
            Feed them bones and politics
            You wanna revolutionize?
            Be specific and believe your eyes
            Start a war in another backyard
            And we'll destroy your house of cards
            Give me a minute and I'll change your mind
            Give me a bullet and I'll change your life
            Remember,
            Surrender,
            The time is now
            Continue,
            We're in you,
            And we will burn your cities down
            America is a killing name
            It doesn't feel or discriminate
            Life is just a killing field
            It's all that's left, nothing's real
            Throw away your disposable past
            And fall apart like a cigarette ash
            We are the fatal and vital ones of the world
            And we will burn your cities down, down, down
            We will burn your cities down, down, down
            We will burn your cities down
            America, what if "god" doesn't care?`,
            audio : '/demo/Slipknot/Gematria.mp3'
        },

        {
            image : "https://fringster.com/content/images/2294.jpg",
            name : "Sulfur", 
            genre : "Rock",
            fav : 95,
            lyric : `My guilt and my shame always sell me short,
            Always feel the same
            And my face and my soul always wear me thin,
            Always under control
            But the longest hours you'll have in your life
            Are the ones you sit through to know if you're right
            So I'll wait, but I pray that I'm wrong
            Because I think I know what's going on
            So let me get this straight, the only will is my own
            I do whatever I want and stay alone
            All my decisions make it untouchable and tainted
            I'm gonna suffer for the rest of my life
            But I will always find a way to survive
            I'm not a failure, but I know what it's like
            I can take it or leave it, or die
            Stay, you don't always know where you stand
            Till you know that you won't run away
            There's something inside me that feels
            Like breathing in sulfur
            My life is undone, and I'm a sinner to most but a sage to some
            And my gods are untrue, I'm probably wrong, but I'm better than you
            And the longest hours I've had in my life
            Were the ones I went through to know I was right
            So I'm safe, but I'm a little outside
            I'm gonna laugh when I'm buried alive
            Stay, you don't always know where you stand
            Till you know that you won't run away
            There's something inside me that feels
            Like breathing in sulfur
            Like breathing in sulfur
            Like breathing in sulfur
            Stay, you don't always know where you stand
            Till you know that you won't run away
            There's something inside me that feels
            Like breathing in sulfur
            Stay, you don't always know where you stand
            Till you know that you won't run away
            There's something inside me that feels
            Like breathing in sulfur
            Like breathing in sulfur
            Like breathing in sulfur
            Like breathing in sulfur`,
            audio : '/demo/Slipknot/Sulfur.mp3'
        },

        {
            image : "https://i.ytimg.com/vi/5abamRO41fE/maxresdefault.jpg",
            name : "Psychosocial", 
            genre : "Rock",
            fav : 44,
            lyric : `Yeah!
            I did my time, and I want out
            So effusive fade, it doesn't cut
            The soul is not so vibrant
            The reckoning, the sickening
            Packaging subversion
            Pseudo sacrosanct perversion
            Go drill your deserts
            Go dig your graves
            Then fill your mouth with all the money you will save
            Sinking in, getting smaller again
            I'm done, it has begun
            I'm not the only one
            And the rain will kill us all
            Throw ourselves against the wall
            But no one else can see
            The preservation of the martyr in me
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Oh, there are cracks in the road we laid
            But where the temple fell
            The secrets have gone mad
            This is nothing new
            But when we killed it all
            The hate was all we had
            Who needs another mess?
            We could start over
            Just look me in the eyes and say I'm wrong
            Now there's only emptiness
            Venomous, insipid
            I think we're done
            I'm not the only one!
            And the rain will kill us all
            Throw ourselves against the wall
            But no one else can see
            The preservation of the martyr in me
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Psychosocial!
            Psychosocial!
            The limits of the dead!
            The limits of the dead!
            The limits of the dead!
            The limits of the dead!
            Fake anti-fascist lie
            I tried to tell you but
            Your purple hearts are giving out!
            Can't stop a killing idea
            If it's hunting season
            Is this what you want?
            I'm not the only one!
            And the rain will kill us all
            We throw ourselves against the wall
            But no one else can see
            The preservation of the martyr in me
            And the rain will kill us all
            We throw ourselves against the wall
            But no one else can see
            The preservation of the martyr in me
            The limits of the dead!
            The limits of the dead!`,
            audio : '/demo/Slipknot/Psychosocial.mp3'
        }
    ];

const BabymetalSong = [
    {
        image : "https://i.ytimg.com/vi/cJ_poK8kVOU/maxresdefault.jpg",
        name : "Babymetal Death", 
        genre : "Rock",
        fav : 100,
        lyric: `B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! SU-METAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! YUIMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! MOAMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! BABYMETAL DEATH!!
        B A B Y M E T A L
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! SU-METAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! YUIMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! MOAMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! SU-METAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! YUIMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! MOAMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!! BABYMETAL DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        DEATH!!
        B×A×B×Y×M×E×T×A×L
        DEATH!!`,
        audio : '/demo/Babymetal/BABYMETALDEATH.mp3'
    },
    {
        image : "https://i1.sndcdn.com/artworks-000091364658-ay3rca-t500x500.jpg",
        name : "Megitsune", 
        genre : "Rock",
        fav : 40,
        lyric: `(sore!! sore!! sore!! sore sore sore sore!!)
        (sore!! sore!! sore!! sore sore sore sore!!)
        
        omekashi kitsune san
        (chikichiki wasshoi! chikichiki wasshoi!)
        
        tsuinte nabikase te
        (kirakira wasshoi! kirakira wasshoi!)
        
        hajikete doron shite
        (guruguru wasshoi! guruguru wasshoi!)
        
        iza ike nana henka
        (konkonkonkokonkonkokon!)
        
        (sore!! sore!! sore!! sore sore sore sore!!)
        (sore!! sore!! sore!! sore sore sore sore!!)
        
        inishie no otome tachi yo kari some no yume ni odoru
        ikusen no toki wo koete ima o ikiru
        
        Ah~ah.. sou yoitsu demo onna wa joyuu yo
        kitsune ja nai kitsune ja nai otome wa megitsune
        
        Ah~ah..yamatonadeshiko onna wa kawaru no
        kao de waratte kokoro de nai te
        sou yo ne tte namida wa mise nai no
        
        kitsune kitsune
        watashi wa megitsune onna wa joyuu yo
        
        (so iyasoiyasoiyaso iya so iyasoiyasoiyaso iya so iyasoiyasoiyaso iya sore sore sore sore!)
        (so iyasoiyasoiyaso iya so iyasoiyasoiyaso iya so iyasoiyasoiyaso iya sore sore sore sore!)
        
        (sore!! sore!! sore!! sore sore sore sore!!)
        (sore!! sore!! sore!! sore sore sore sore!!)
        
        inishie no otome tachi yo kari hajime no yume ni utau
        ikusen no toki wo koe te koko ni ikiru
        
        Ah~ah.. sou yoitsu demo onna wa joyuu yo
        kitsune ja nai kitsune ja nai otome wa...
        
        'name tara ikanze yo!'
        
        Ah~ah.. yamatonadeshiko onna wa kawaru no
        zutto itsumo kienai you ni hanabi wo ageru no
        
        Ah~ah.. sai te chiru no ga onna no sadame yo
        kao de waratte kokoro de nai te
        junjou otome na megitsune yo
        
        Ah~ah..`,
        audio : '/demo/Babymetal/Megitsune.mp3'
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/8/83/Babymetal_Gimme_Chocolate%21%21_UK_iTunes_artwork.jpg",
        name : "Gimme Chocolate!!", 
        genre : "Rock",
        fav : 20,
        lyric: `[Give me chocolate!]

        Atatata tata tatatata zukkyun!
        Watatata tata tatatata dokkyun!
        Zukyun! Dokyun!
        Zukyun! Dokyun!
        Yada! Yada! Yada! Yada!
        NEVER! NEVER! NEVER!
        
        C! I! O! (chekera) Chokoreeto chokoreeto
        Cho! Cho! Cho! Iikana?
        Demo ne chotto Weight
        Chotto saikin shinpai nan desu
        Dakedo chokoreeto chokoreeto
        Cho! Cho! Cho! Iikana?
        Demo ne chotto Wait
        Chotto matte
        Cho! Cho! Cho!
        
        [ Give me! ]
        
        [Give me chocolate!]
        
        Atatata tata tatatata zukkyun!
        Watatata tata tatatata dokkyun!
        Zukyun! Dokyun!
        Zukyun! Dokyun!
        Mada! Mada! Mada! Mada!
        NEVER! NEVER! NEVER!
        
        C! I! O! (chekera) Chokoreeto chokoreeto
        Cho! Cho! Cho! Iiyone?
        Demo ne chotto Weight
        Chotto saikin shinpai nan desu
        Dakedo chokoreeto chokoreeto
        Cho! Cho! Cho! Iiyone?
        Demo ne chotto Wait
        Chotto matte
        Cho! Cho! Cho!
        
        [Give me!]
        
        Parappappappaa rappappappaa
        Rappappappaa paapapapapaa
        
        Too too late! Too too late!
        Too too P! P! P! (Please! Please! Please!)
        Come on!
        
        [Give me chocolate!]
        
        Atatata tata tatatata zukkyun!
        Watatata tata tatatata dokkyun!
        Zukyun! Dokyun!
        Zukyun! Dokyun!
        Yada! Yada! Yada! Yada!
        NEVER! NEVER! NEVER!
        
        Yabai cho! Cho! Haado
        Cho! Ippai ganbattan desu
        Dakara chotto haato
        Chotto dake onegai nan desu
        Hayaku chokoreeto chokoreeto
        Cho! Cho! Cho! Choudai
        Yokose chokoreeto
        Chokoreeto please!!
        
        C! I! O! (chekera) Chokoreeto chokoreeto
        Cho! Cho! Cho! Iidesho?
        Dayone cho! Cho! GOOD
        Cho! Happii de ganbacchaun desu
        Dakara chokoreeto chokoreeto
        Cho! Cho! Cho! Iidesho?
        Dayone chotto dake
        Chotto dake tabechaou!!
        
        Parappappappaa rappappappaa
        Rappappappaa paapapapapaa
        
        Too too late! Too too late!
        Too too P! P! P! (Please! Please! Please!)
        Come on!
        
        Parappappappaa rappappappaa
        Rappappappaa paapapapapaa
        
        Parappappappaa rappappappaa
        Rappappappaa paapapapapaa`,
        audio : '/demo/Babymetal/GimmeChocolate!!.mp3'
    },
    {
        image : "https://i1.sndcdn.com/artworks-000173825717-fl1wpv-t500x500.jpg",
        name : "Iine!", 
        genre : "Rock",
        fav : 105,
        lyric: `Chi-ku-ta-ku shichau
        Kimochi tomara-nai yo
        Chi-ku-ta-ku shichau
        Kimochi ai sukuriimo
        
        Sore watashi no oyatsu!
        Cho cho cho!
        Furage shinai de yo!
        
        (Omae no mono wa ore no mono)
        
        Hitorikiri de sora miageta
        senchimentaru naito
        Ikoo zukkyuun to
        genjitsu toohikou
        
        Iine! Iine!
        Yo-zora de paari-nait
        Iine! Iine!
        Kagayaite-'kou
        Torima mosshusshu
        Sukoshi-zutsu nante muri
        
        Yeah, yeah!
        Chouzetu sugiru yo  Kanpeki yo
        Onnya-no-ko wa
        Yume mo kitto
        chou kaosu da yo
        
        Atama yurase! Megane hazuse!
        Atama mawase! Megane hazuse!
        Atama yurase! Megane hazuse!
        Gyuugyuu panpan tsume-sugi ryukku wa
        Sugu-sama orose!
        
        Yo! Yo! Yo! Yo!
        Maikurohon chekku wan tsuu wan tsuu
        Aa yuu redii tuu moosh?
        Aa yuu redii tuu moosh?
        Put your KITSUNE up!!
        Kitsune da-o
        
        (Meroikku ja nai, Kitsune san)
        (Meroikku ja nai, Kitsune da)
        
        Gyaa
        
        Hitorikiri de yubi-kiri shita
        senchimentaru naito
        Ikoo zukkyuun to
        genjitsu toohikou
        
        Iine! Iine!
        Yo-zora de paari-nait
        Iine! Iine!
        Kagayaite-'kou
        Torima mosshusshu
        Sukoshi-zutsu nante muri
        
        Yeah, yeah!
        Chouzetu sugiru yo kanpeki yo
        Onnya-no-ko wa
        Yume mo kitto
        chou kaosu da yo
        
        (Iine! Iine!)
        Yeah, yeah!
        (Iine! Iine!)
        Yeah, yeah!
        (Iine! Iine!)
        Chou kaosu sa
        
        Yeah, yeah!
        (Iine! Iine!)
        Yeah, yeah!
        (Iine! Iine!)
        Yeah, yeah!
        (Iine! Iine!)
        (Iine! Iine! Iine! Iine!)`,
        audio : '/demo/Babymetal/Iine!.mp3'
    }
]

const YoungohmSong = [
    {
        image : "https://i.ytimg.com/vi/0ZB9vIenyuc/maxresdefault.jpg",
        name :  "ก่อนนอนคืนนี้",
        genre : "Rap",
        fav : 400,
        lyric : `ก่อนนอนคืนนี้ช่วยส่งข้อความ
        ห่างเพียงนิดใจอย่าวู่วาม
        ห่างเพียงแป๊บมันไม่ได้นาน
        เธอรู้ว่าเธอสำคัญแค่ไหน
        
        ก็ฉันอยากอยู่ข้างเธอตลอดไป
        อยู่ดูแลให้เธอน่ะปลอดภัย
        แต่อย่าให้รู้ว่าเธอน่ะนอกใจ
        ฉันเอาเธอตาย ฉันเอาเธอตาย ฉันเอาเธอตาย
        
        ไม่รับสายทำไมอะ
        เธอนั่งอยู่กับใครป่ะ ฉันต้องทำยังไงอะ
        ข้อความมาก่อนก็ได้ค่ะ
        จะได้รู้ทำไรอยู่ ฉันจะได้ทำตัวถูก
        เพราะในใจก็กลัวอยู่ กลัวว่าเธอจะมีชู้ ( Fuck you)
        
        ก็เพราะ You're my trap queen
        ฉันนี่ก็ต้องหวงก็เธอน่ะสวยซะยิ่งกว่านางฟ้า
        คือยอดดวงใจที่ฉันเคยตามหา
        ดีกว่าใครทุกคนดารงดาราที่ฉันเคยผ่านมา
        
        ไม่ต้องกังวลฉันไม่ไปไหน
        ถ้าเธอยังมั่นใจในตัวของฉัน
        แม้ฉันเป็นคนที่เอาแต่ใจ
        ก็โลกของฉันมันมีแต่เธอเท่านั้น
        
        ก่อนนอนคืนนี้ช่วยส่งข้อความ
        ห่างเพียงนิดใจอย่าวู่วาม
        ห่างเพียงแป๊บมันไม่ได้นาน
        เธอรู้ว่าเธอสำคัญแค่ไหน
        
        ก็ฉันอยากอยู่ข้างเธอตลอดไป
        อยู่ดูแลให้เธอน่ะปลอดภัย
        แต่อย่าให้รู้ว่าเธอน่ะนอกใจ
        ฉันเอาเธอตาย ฉันเอาเธอตาย ฉันเอาเธอตาย
        
        You're the only one ฉันจะปล่อยเธอไปได้ไง
        ช่วยข้อความหากัน อย่าให้ฉันเป็นห่วง
        
        เข้าใจไหมที่ I say ถ้าไม่เข้าใจ Get out of my way
        เธอรู้เธอน่ะ Made my day
        What you want you know that I pay
        ทำเพื่อเธอเท่าไรฉันว่าเธอเองก็คงจะรู้
        ขอแค่เธอไม่ยุ่งกับใครแค่นั้นก็พอละค่ะ
        
        ไม่ต้องกังวลฉันไม่ไปไหน
        ถ้าเธอยังมั่นใจในตัวของฉัน
        แม้ฉันเป็นคนที่เอาแต่ใจ
        แต่โลกของฉันมันมีแต่เธอเท่านั้น
        
        ก่อนนอนคืนนี้ช่วยส่งข้อความ
        ห่างเพียงนิดใจอย่าวู่วาม
        ห่างเพียงแป๊บมันไม่ได้นาน
        เธอรู้ว่าเธอสำคัญแค่ไหน
        
        ก็ฉันอยากอยู่ข้างเธอตลอดไป
        อยู่ดูแลให้เธอน่ะปลอดภัย
        แต่อย่าให้รู้ว่าเธอน่ะนอกใจ
        ฉันเอาเธอตาย ฉันเอาเธอตาย ฉันเอาเธอตาย`,
        audio : "/demo/Youngohm/ก่อนนอนคืนนี้.mp3"
    },
    {
        image : "https://images.genius.com/99d0a490c8a6933861bd2a4ee5db5ac7.1000x1000x1.jpg",
        name :  "แสงไฟ in the city",
        genre : "Rap",
        fav : 100,
        lyric : `ล่องลอย in the city
        I i’ma take, take you with me
        แสงไฟ in the city
        ทำให้ใจคุณรู้สึกดี
        
        ล่องลอย in the city
        I i’ma take, take you with me
        แสงไฟ in the city
        ทำให้ใจคุณรู้สึกดี
        
        เกิดและโต มาแถวสุขุมวิท
        ไม่เชื่อใคร เอาแต่ที่กูคิด
        ผู้หลักผู้ใหญ่ ต้องร้องว่า Ooh shit
        ตอนนี้หล่ะเปนยังไง คุณลองมาดูดิ้
        
        จากเด็กวัดธาตุทองกูกลาย RAPSTAR
        ถ้าไม่กล้าลอง คงไม่เป็น RAPSTAR
        บ้านไม่ได้รวย กูก็แค่ RAP HARD
        กูทำด้วยตัวเองกูไม่ได้ HACK มา
        
        เอกมัย you kno we made it (you we made it!)
        ถ้าไม่มีมึง กูคงไม่ made it
        ตาและยาย บอกต้องยังงี้สิ
        สิบล้านในบัญชีมันไม่ที่ติ
        
        กูทำให้คนรู้จักเดินออกนอกกรอบ
        ไม่ใช่แค่ทำ ทำตามแต่ที่พ่อบอก
        BKK มีกูเป็นทรัพย์สมบัติ
        ไหนรางวัล รางวัลสำหรับผมหล่ะ
        
        ล่องลอย in the city
        I i’ma take, take you with me
        แสงไฟ in the city
        ทำให้ใจคุณรู้สึกดี
        
        ล่องลอย in the city
        I i’ma take, take you with me
        แสงไฟ in the city
        ทำให้ใจคุณรู้สึกดี yeah...
        youngohm matherf**ker
        
        BANGKOK LEGACY...`,
        audio : "/demo/Youngohm/แสงไฟinthecity.mp3"
    },
    {
        image : "https://i.ytimg.com/vi/J_uO1tfyJpA/maxresdefault.jpg",
        name :  "อัศวินรัตติกาล",
        genre : "Rap",
        fav : 50,
        lyric : `Oh... oh oh oh, oh oh ooh yeah
        Haa...ha ha hahh, Y.O. Ohh
        
        ให้เธอเรียกฉันว่าอัศวิน รัติตกาล
        หลบอยู่ในเงารอตอนเธอเหงา เธอต้องการ
        เมื่อยามดึกดื่นตอนไม่มีเขา ให้รำคาญ
        อยู่ในมุมมืดที่เธอไม่เห็น แม้วิญญาณ
        คอยแอบมองเธอเหมือนอัศวินรัติตกาล
        หลบอยู่ในเงารอตอนเธอเหงา เธอต้องการ
        เมื่อยามดึกดื่นตอนไม่มีเขาให้รำคาญ
        ฉันพร้อมเสมอแค่โทรมา ขอร้องหล่ะเธอแค่โทรมา ay ya yah
        
        เธอไม่เคยโทร ไม่เคยโทร ไม่เคยโทร ไม่เคยโทร
        เธอไม่เคยโทร ไม่เคยโทร ไม่เคยโทรมาหา กันเลย...
        เธอไม่เคยโทร ไม่เคยโทร ไม่เคยโทร ไม่เคยโทร
        ฉันได้แต่ Roll และก็ Roll และก็ Roll ก็ยัง Rollin ต่อไป (rollin)
        เฝ้ามองเธอ...
        แต่รู้เธอคงไม่คิดจะหันมามอง
        แต่ขอแค่ได้คุ้มครองเธอ...
        ไม่ว่าใครบอกเลยอย่าคิดจะลอง
        
        ฉันนั้นก็แค่ อยากอยู่ข้างเธอตอนเธอแย่
        จำไว้ข้อแรก เมื่อเธอโอเคเราก็แยก
        If u want me to go, แค่บอกฉันว่า no no
        I’ll be on my way, ฉันจะไม่รบกวนเธออีก yea yeah
        อยากให้เธอรู้สึกดี ไม่อยากให้เธอเศร้าเท่านั้นเอง
        ถ้าเธอไม่ต้องการก็แค่พูดมันมาเลยมันไม่ได้ยากเย็น
        ฉันไม่รู้ ว่าในใจของเธอ หน่ะเธอ Need who
        แต่ที่ฉันรู้คือฉันไม่มีทางได้ be With you
        
        Oh... oh oh oh, oh oh, oh oh
        Haa.. ha ha ha, ha ha...
        Oh... oh oh oh, oh oh ooh woah ooh woah hoo
        Yeah woah ooh woah... hoo...
        
        ให้เธอเรียกฉันว่าอัศวิน รัติตกาล
        หลบอยู่ในเงารอตอนเธอเหงา เธอต้องการ
        เมื่อยามดึกดื่นตอนไม่มีเขา ให้รำคาญ
        อยู่ในมุมมืดที่เธอไม่เห็น แม้วิญญาณ
        คอยแอบมองเธอเหมือนอัศวินรัติตกาล
        หลบอยู่ในเงารอตอนเธอเหงา เธอต้องการ
        เมื่อยามดึกดื่นตอนไม่มีเขาให้รำคาญ
        ฉันพร้อมเสมอแค่โทรมา ขอร้องหล่ะเธอแค่โทรมา ay ya yah
        
        และนี่คืออัศวินรัติกาล
        อยากจะพาเธอไปลอยละก็บินขึ้นบนยาน
        แม้ว่ากูจะไม่ดีแต่ว่าเธอก็ยังมา
        พาเธอขึ้นไปละก็ smokin กัญชา
        ทำฉันหวาดระแวงเธอจนเป็นบ้า
        เธอขับเบ้นไม่ได้มีโตโยต้า
        Suck on my dick ให้มันลงไปที่หน้า
        แทงจากข้างหลังละก็แทงไปข้างหน้าเธอ
        
        ตอนนี้อยู่ข้างๆเธอ
        ห้องฉันก็เหมือนเป็นบ้านเธอ
        ชอบในตอนที่เรานอนอยู่ข้างล่างเธอ
        โทดที่ iphone ไม่ค่อยจะมีหน้าเธอ
        หวังว่าเธอไม่ได้เข้ามาทำร้ายกัน
        ก็ไม่รู้ว่าเรามีอะไรคล้ายกัน
        รู้ว่าเธอไม่ได้มาเพราะอยากได้ตัง
        คนที่เจ้าชู้นะมันตายไปแล้ว
        ฉันคนเดิม ตอนนี้ฉันหน่ะไม่ใช่มัน
        
        สัญญา กับตัวเองละก็เธอ
        ว่าจะไม่นอกใจ
        ไม่อยากทำให้ใครเสียใจ
        เท่าไรละน้ำตาที่เธอเสียไป
        เนื้อเพลงที่ได้เขียนไป
        มันออกมาจากใจ
        เธอก็รู้ว่านี่เสียงใคร
        อนาคตก็ไม่รู้จะเป็นไงแต่จะทำให้ดีที่สุดเลย
        
        ให้เธอเรียกฉันว่าอัศวิน รัติตกาล
        หลบอยู่ในเงารอตอนเธอเหงา เธอต้องการ
        เมื่อยามดึกดื่นตอนไม่มีเขา ให้รำคาญ
        อยู่ในมุมมืดที่เธอไม่เห็น แม้วิญญาณ
        คอยแอบมองเธอเหมือนอัศวินรัติตกาล
        หลบอยู่ในเงารอตอนเธอเหงา เธอต้องการ
        เมื่อยามดึกดื่นตอนไม่มีเขาให้รำคาญ
        ฉันพร้อมเสมอแค่โทรมา ขอร้องหล่ะเธอแค่โทรมา... yo tourlife
        
        เป็นอัศวินรัตติกาล...`,
        audio : "/demo/Youngohm/อัศวินรัตติกาล.mp3"
    },
    {
        image : "https://i.ytimg.com/vi/mDd9qGBqY00/maxresdefault.jpg",
        name :  "อุ่นแกง",
        genre : "Rap",
        fav : 70,
        lyric : `ตอนที่เธอเหงาที่ไม่ได้อยู่กับเขาอยากให้ DM มา
        ฉันพร้อมเสมอพร้อมจะเจอเธอและเธอไม่จำเป็นต้องลีลา
        รู้ตัวบ้างไหมทุกนาทีที่ได้อยู่ข้างเธอมันมีค่า
        เลิกกันไปแล้วแต่ว่าในตอนที่รักกันมันก็ดีน้า
        ฉันกับเธอนั้น รู้แก่ใจดี
        แค่ไม่อยากให้เราต้องมาลืมกันไป
        และฉันจะไม่ยอมให้เสียเธอไปอีก
        กลับมาได้ไหมถ้าหากว่าเธอลำบาก
        เห็นอยู่กับเขาก็มีแต่เจ็บเปล่าๆ
        ถ้ามันไม่ไหวจะทนทำไมต้องเจ็บเท่าไรเธอถึงจะพอ
        คือมันไม่ใช่มันทำอย่างงี้กับเธอไม่ได้
        มันนอกใจเธอมาตั้งกี่ที
        แต่เธอก็ปล่อยมันไปง่ายๆ
        แล้วทนทำไม
        เธอนี่เป็นคนยังไง
        รู้ว่าฉันก็ร้าย
        ร้ายอย่างงี้มันก็ไม่ใช่
        ถ้าเทียบกับฉันมันยังไม่ใกล้
        ไอ้ที่พูดมาทั้งหมดเนี่ย
        แค่อยากบอกว่าคิดถึงเธอ Oh
        เธอไม่จำเป็นต้องพูดอะไร
        ถ้าเกิดว่าเธอไม่คิดถึงเลย Oh
        ตอนที่เธอเหงาที่ไม่ได้อยู่กับเขาอยากให้ DM มา
        ฉันพร้อมเสมอพร้อมจะเจอเธอและเธอไม่จำเป็นต้องลีลา
        รู้ตัวบ้างไหมทุกนาทีที่ได้อยู่ข้างเธอมันมีค่า
        เลิกกันไปแล้วแต่ว่าในตอนที่รักกันมันก็ดีน้า
        ฉันกับเธอนั้น รู้แก่ใจดี
        แค่ไม่อยากให้เราต้องมาลืมกันไป
        และฉันจะไม่ยอมให้เสียเธอไปอีก
        อยากนอนกอดเธอนานๆ
        ก็มันคิดถึงวันวาน
        ปากเธอกับควันจางๆ
        แค่คิดถึงเธอขึ้นมาไม่ต้องการอะไรทั้งนั้น
        Let me let me know
        เธอบอกกับฉัน Let me know yah
        Money โคตรจะ Roll
        ฟันอย่างทองและแถมด้วย Rolex
        Let me let me know
        นี่ไปด้วยกันถ้าเธอพร้อม Let's go นะ
        Let me show you
        How to live a life oh baby
        ไอ้ที่พูดมาทั้งหมดเนี่ย
        แค่อยากบอกว่าคิดถึงเธอ Oh
        เธอไม่จำเป็นต้องพูดอะไร
        ถ้าเกิดว่าเธอไม่คิดถึงเลย Oh
        ตอนที่เธอเหงาที่ไม่ได้อยู่กับเขาอยากให้ DM มา
        ฉันพร้อมเสมอพร้อมจะเจอเธอและเธอไม่จำเป็นต้องลีลา
        รู้ตัวบ้างไหมทุกนาทีที่ได้อยู่ข้างเธอมันมีค่า
        เลิกกันไปแล้วแต่ว่าในตอนที่รักกันมันก็ดีน้า
        ฉันกับเธอนั้น รู้แก่ใจดี
        แค่ไม่อยากให้เราต้องมาลืมกันไป
        และฉันจะไม่ยอมให้เสียเธอไปอีก`,
        audio : "/demo/Youngohm/อุ่นแกง.mp3"
    }
]

const ThetoySong = [
    {
        image : "https://i.ytimg.com/vi/E6TWhzCwvYo/mqdefault.jpg",
        name :  "หน้าหนาวที่แล้ว",
        genre : "Pop",
        fav : 700,
        lyric : `เด็กสมัยนี้โตไวเนอะ
        ฮู้-โอ
        เช้าลืมตาขึ้นมามองเธอในยามเช้าตรู่
        แอบหอมแก้มเธอเบาเบา ทั้งทั้ง ที่เธอไม่รู้
        ฝันกลางวันด้วยกัน ดอกไม้ของเธอกับฉัน
        แค่มีวันเหล่านั้นก็มีความสุขเหลือเกิน
        แต่แล้วเวลาผ่านไปรักของเราก็จางหาย
        กลายเป็นภาพของความทรงจำดีดี ที่โดนสะกดไว้
        ไม่มีเธอกับฉัน ไม่มีวันเหล่านั้น
        และไม่มีทางที่ฉันได้กุมมือเธอแม้คราใด
        ดอกไม้ตอนนี้เธอไปอยู่ไหน
        ถ้าใจเธอให้ใครแล้วฉันจะอยู่ยังไง
        ถ้าขอพรจากฟ้าข้อหนึ่งได้
        จะขอเธอกลับมาอย่าให้ไปรักใคร
        เจ้าดอกไม้ตอนนี้เธอไปอยู่ไหน
        ถ้าใจเธอให้ใครแล้วฉันจะอยู่อย่างไร
        ถ้าขอพรจากฟ้าข้อหนึ่งได้
        จะขอเธอกลับมาอย่าให้ไปรักใคร
        I wanna tell you 'bout something that we should be together
        But it someone that right there just break we down forever
        นึกถึงเธอเมื่อตอนตื่นนอนในตอนเช้า เวลาเก้านาฬิกาก็คิดถึง (ทุกที)
        And it start like everyday found my heart
        and I wanna play them you with you (oh baby)
        นั่งคิดถึงแต่เรื่องเธอทั้งคืน maybe wanna try to get up ตอนตื่น
        แค่ยังไม่อยากหายต้องกลายเป็นคนอื่น แต่ก็ได้แค่ get high และนั่งลงรื้อฟื้น ฮู้
        Baby I can't get you out of my life it's hard
        Don't you know thing at that the beautiful
        แค่จากเธอไปก็เหมือนจะตาย ตะเกียกตะกายไม่ค่อยสบายจะทำยังไงให้เหมือนก่อน
        เจ้าดอกไม้ตอนนี้เธอไปอยู่ไหน
        ถ้าเธอจะให้ใครแล้วฉันจะอยู่ยังไง
        ถ้าขอพรจากฟ้าข้อหนึ่งได้
        จะขอเธอกลับมา อย่าให้ไปรักใคร
        เจ้าดอกไม้ตอนนี้เธอไปอยู่ไหน
        ถ้าเธอจะให้ใครแล้วฉันจะอยู่อย่างไร
        ถ้าขอพรจากฟ้าข้อหนึ่งได้
        จะขอเธอกลับมา อย่าให้ไปรักใคร
        เอาเป็นว่าแม้เข็มของนาฬิกา ยังไม่มีวันจะเดินกลับมา
        ทุกครั้งทุกคราที่เคยจดจำ นั้นทำให้ช้ำเหลือเกินแม่ญา
        เมื่อเช้าใกล้หน้าหนาว กินแต่ข้าวกับค้างคาว
        ไม่มีเธอถึงกลับเบลอ โอ้อยากเจอเธอเหลือเกิน
        เปรียบกับด้ามปากกาที่หาไม่เจอ ต้องเพ้อ ละเมอนะเออ
        เจ้าเธอจะรู้ตัวไหม เฮ้อ เหมือนจะเบลอ
        แสงในยามเช้า เคยงดงามในหน้าหนาว
        ไม่อยากให้เธอต้องไปกับเขา ถ้าจะไม่ทำให้ใครต้องร้าวราน
        เจ้าดอกไม้ตอนนี้เธอไปอยู่ไหน
        ถ้าเธอจะให้ใครแล้วฉันจะอยู่ยังไง
        ถ้าขอพรจากฟ้าข้อหนึ่งได้
        จะขอเธอกลับมา อย่าให้ไปรักใคร
        เจ้าดอกไม้ตอนนี้เธอไปอยู่ไหน
        ถ้าเธอจะให้ใครแล้วฉันจะอยู่ยังไง
        ถ้าขอพรจากฟ้าข้อหนึ่งได้
        จะขอเธอกลับมา อย่าให้ไปรักใคร`,
        audio : "/demo/Thetoy/หน้าหนาวที่แล้ว.mp3"
    },
    {
        image : "https://www.songdee.com/wp-content/uploads/2017/05/%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%9D%E0%B8%99-The-TOYS.jpg",
        name :  "ก่อนฤดูฝน",
        genre : "Pop",
        fav : 500,
        lyric : `เพียงแค่ฝนตกลงที่หน้าต่างในบางครา
        เพียงแค่ฝนตกลงในวันหยุดในตอนเช้า
        มันก็อาจจะมีนิดเดียวที่คิดถึงเธอ
        มันก็อาจจะเป็นครั้งเดียวที่บอกรักเธอ
        เพียงแค่ฉันเองก็ไม่รู้ว่าในทุกๆวันที่มีแต่เธอ
        ยังคงละเมอและเพ้อทุกครั้งที่มองขึ้นไป
        บนท้องฟ้าหยดน้ำค้างตกกระทบในตาฉัน
        แล้วในวันนี้พรุ่งนี้จะเป็นยังไงจะเดินจะกิน
        จะนอนจนวันนึงให้วันเวลาเดินไปเท่าไร
        แต่สุดท้ายแดดยามเช้าก็ไม่สดใส
        เพียงแค่ฝนตกลงที่หน้าต่างในบางครา
        เพียงแค่ฝนตกลงในวันหยุดในตอนเช้า
        มันก็อาจจะมีนิดเดียวที่คิดถึงเธอ
        มันก็อาจจะเป็นครั้งเดียวที่บอกรักเธอ
        แต่สุดท้ายกาลเวลาก็บอกฉัน
        ว่าเธอนั้นไม่ใช่ทุกอย่างและฉันก็ไม่ต้องการ
        เธอในตอนนี้ก็มีแค่เพียงฝน
        มาอยู่กับฉันมาแทนที่เธอในวันที่ฉันต้องการแค่
        เพียงแค่ฝนตกลงที่หน้าต่างในบางครา
        เพียงแค่ฝนตกลงในวันหยุดในตอนเช้า
        มันก็อาจจะมีนิดเดียวที่คิดถึงเธอ
        มันก็อาจจะเป็นครั้งเดียวที่บอกรักเธอ
        เพียงแค่ฝนตกลงที่หน้าต่างในบางครา
        เพียงแค่ฝนตกลงในวันหยุดในตอนเช้า
        มันก็อาจจะมีนิดเดียวที่คิดถึงเธอ
        มันก็อาจจะเป็นครั้งเดียวที่บอกรักเธอ`,
        audio : "/demo/Thetoy/ก่อนฤดูฝน.mp3"
    },
    {
        image : "https://www.fungjaizine.com/wp-content/uploads/2018/01/IMG_0552_Easy-Resize.com_.jpg",
        name :  "04:00",
        genre : "Pop",
        fav : 40,
        lyric : `ตื่นขึ้นมาจากฝันดีๆในตอนตีสี่
        ทั้งที่ไม่ได้คิดเรื่องอะไร
        บอกกับตัวเองเวลานี้พยายามจะหลับตา
        แต่ก็ทำไม่ได้สักทีไม่รู้ทำไม
        ยังทำได้เพียงแค่สงสัยเป็นอะไร
        ที่ฉันเองพยายาม
        นอนหลับตาฝันฉันฝันถึงเธอ
        หลับตาลงทุกทียังเจอเธอในนี้ไม่ว่าคราใด
        อยากจะนอนหลับตาอย่างนี้เรื่อยไป
        ยังฝันฉันฝันถึงเธอ
        หลับตาลงทุกทียังเจอเธอในนี้ไม่ว่าคราใด
        อยากจะนอนหลับตาอย่างนี้เรื่อยไป
        ค่ำคืนที่แสนเหน็บหนาวที่เธอกอดเขาไว้
        เป็นราตรีเดียวกับฉันที่ยังฝันว่าเธอ
        กอดฉันทุกคืนตรงนี้
        แค่ได้เห็นเธอกับเขามันก็เจ็บแค่ไหน
        ยังต้องทนทรมานยังต้องฝันถึงเธอ
        ที่เธอยังกอดฉันในตรงนี้
        นอนหลับตาฝันฉันฝันถึงเธอ
        หลับตาลงทุกทียังเจอเธอในนี้ไม่ว่าคราใด
        อยากจะนอนหลับตาอย่างนี้เรื่อยไป
        ยังฝันฉันฝันถึงเธอ
        หลับตาลงทุกทียังเจอเธอในนี้ไม่ว่าคราใด
        อยากจะนอนหลับตาอย่างนี้เรื่อยไป
        ฝันฉันฝันถึงเธอ
        หลับตาลงทุกทียังเจอเธอในนี้ไม่ว่าคราใด
        อยากจะนอนหลับตาอย่างนี้เรื่อยไป
        ยังฝันฉันฝันถึงเธอ
        หลับตาลงทุกทียังเจอเธอในนี้ไม่ว่าคราใด
        อยากจะนอนหลับตาอย่างนี้เรื่อยไป`,
        audio : "/demo/Thetoy/0400.mp3"
    },
    {
        image : "https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9qb294LWNtcy1pbWFnZS0xMjUxMzE2MTYxLmZpbGUubXlxY2xvdWQuY29tLzIwMjEvMDkvMjYvMmY1OWY1M2UtOGU3YS00NDhkLThlYTQtZjYzYTg5YWI4YWUxLmpwZy8xMDAw.jpg",
        name :  "TOY",
        genre : "Pop",
        fav : 77,
        lyric : `ทำได้แค่เพียงมองดูเธอ
        ค่อยค่อยเดินจากไปอย่างช้าช้า
        ก็ไม่ได้คิดว่าเธอทำผิด
        ก็เรื่องแบบนี้ธรรมดา
        เธอไม่ต้องที่จะอธิบาย
        ถึงฉันรู้เธอก็ต้องไป
        เป็นได้แค่นี้จริงจริง
        แค่คนคนเดียวที่รักเธอที่สุด
        กระจกใบนี้มันไม่มีราคาใด
        อย่าพยายามมองเข้าไป
        ถูกแล้ว
        ที่เขาควรจะเดินไป
        โกรธตัวเองทุกครั้งที่ส่อง
        กระจกใบนี้
        มันไม่มีราคาใด
        อย่าพยายามมองเข้าไป
        ถูกแล้ว
        ที่เขาควรจะเดินไป
        โกรธตัวเองทุกครั้งที่ส่องกระจกใบนี้
        กระจกใบนี้
        มันไม่มีราคาใด
        อย่าพยายามมองเข้าไป
        ถูกแล้ว
        ที่เขาควรจะเดินไป
        โกรธตัวเองทุกครั้งที่ส่อง
        กระจกใบนี้
        มันไม่มีราคาใด
        อย่าพยายามมองเข้าไป
        ถูกแล้ว
        ที่เขาควรจะเดินไป
        โกรธตัวเองทุกครั้งที่ส่อง
        กระจกใบนี้
        มันไม่มีราคาใด
        อย่าพยายามมองเข้าไป
        ถูกแล้ว
        ที่เขาควรจะเดินไป
        โกรธตัวเองทุกครั้งที่ส่อง
        กระจกใบนี้
        มันไม่มีราคาใด
        อย่าพยายามมองเข้าไป
        ถูกแล้ว
        ที่เขาควรจะเดินไป
        โกรธตัวเองทุกครั้งที่ส่องกระจกใบนี้`,
        audio : "/demo/Thetoy/TOY.mp3"
    }
]

const YewSong = [
    {
        image : "https://s.isanook.com/jo/0/rp/r/w300/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzVmZTE5NTYxZjhjODM5ODUvNjQwLmpwZw==.jpg",
        name :  "เก็บ",
        genre : "Pop",
        fav : 400,
        lyric : `ภาวนาให้พรุ่งนี้ฉันจะไม่มีน้ำตา
        ความต้องการคือวันนี้ฉันต้องหยุดทรมาน
        เก็บเขาไปที่เดิมอย่าให้ต้องได้พบเจอสายตากันอีกเลย
        ไม่ต้องเสียเวลาถ้าเราไม่ใช่ความสุขของเขา มันก็ควรเดินต่อไป
        
        เขาจะไม่มีความหมาย ถ้าเธอเลือกทิ้งเขาไป
        ความทรงจำที่มี มันจะผ่านพ้นไป
        เพราะเขาก็คงไม่รู้ ว่าเธอต้องเป็นเช่นไร
        โปรดให้มันสลาย ก่อนที่ใจฉันตายลงไป
        
        แม้เวลาบอกกับฉันว่าเรายังมีน้ำตา
        แต่สักวันความผิดหวังของเธอจะจางหายไป
        ผ่านเรื่องราวเสียใจ เก็บภาพวันที่สวยงามทุกความรู้สึกดี
        แต่อย่าเสียเวลาถ้าเราไม่ใช่ความสุขของเขา มันก็ควรเดินต่อไป`,
        audio : "/demo/Yew/เก็บ.mp3"        
    },
    {
        image : "https://f4.bcbits.com/img/a3969747381_10.jpg",
        name :  "พระจันทร์",
        genre : "Pop",
        fav : 900,
        lyric : `ฉันและเธอได้นั่งดูพระจันทร์ ที่สวยงดงามเธอเล่าให้ฉันฟัง
        วันนึงเธอเดินเข้าไป เดินเข้าไปเมื่อตอนเธอหลับ
        ในฝันฉันกลายเป็นกระต่ายสีเทา อยู่ข้างเคียงเธอกระซิบบอกฉันเบาๆ
        ว่าคืนนี้จันทร์พิเศษ ฉันตอบไปว่าสวยที่สุด
        
        จบคำพูดฉันกลับลอยเข้าไป ดวงดาวพระจันทร์อยู่ตรงนี้ไง
        โอ้ความรัก เธอทำให้รู้จัก ในความหมาย กระต่ายที่ได้พบดวงจันทร์
        
        ท่องเข้าไปที่นี่มีแค่เรา ชีวิตวุ่นวายบนโลกใบสีเทา
        โยนทิ้งของที่อยาก มองเพียงรอยยิ้มมุมปาก
        
        ขอทุกวันไม่แปรเปลี่ยนผันไป จะเล่าเรื่องราว ทุกที่ที่ฉันเคยไป
        เพราะเธอนั้นคือทุกสิ่ง เธอตอบฉันก็คือทุกอย่าง`,
        audio : "/demo/Yew/พระจันทร์.mp3"        
    },
    {
        image : "https://i1.sndcdn.com/artworks-LmCFRBTk115lyaW1-WGSOTw-t500x500.jpg",
        name :  "ลมแล้ง",
        genre : "Pop",
        fav : 100,
        lyric : `ถ้าปล่อยให้คุณไป ไม่รู้จะเป็นยังไง
        ร่วงหล่นดั่งใบไม้ เมื่อคุณต้องเดินไปไกล
        หากหันไปมองเมื่อใด จะเห็นผมรอที่เดิม
        แต่ปีนี้ไม่เหมือนก่อน เมื่อผมมอง คุณอยู่ไหน
        
        ข้างนอกมันโหดร้าย ตัวฉันต้องทำยังไง
        ในมือมีดอกไม้ แต่ลมก็พัดไปไกล
        แค่หันไปมองทางใด ก้อนหินกระจายบนพื้นทราย
        แต่ฉันขอคุณรอก่อน  จะคิดถึง อยู่ห่างไกล
        
        ผมจะรอแค่คุณ ตรงนี้ไม่เปลี่ยนไป
        ฉันจะขอให้วันพรุ่งนี้ ต้นไม้ยังผลิใบ
        นับคืนวันและรอให้เราได้หวนคืนมาอย่างสดใส
        
        หลับตาลงก็คิดถึงคุณที่อยู่ตรงนี้ตลอดมา
        ช่วงเวลาที่เราจับมือและมอบความรักก่อนจากลา
        
        ยิ้มที่ผมเคยมองทุกวัน คำที่คุณต้องพูดทุกครา
        ฉันคิดถึงเธอจริงๆ`,
        audio : "/demo/Yew/ลมแล้ง.mp3"        
    },
    {
        image : "https://pbs.twimg.com/media/Emdl9GhU8AMl-Uf.jpg",
        name :  "แด่คุณ",
        genre : "Pop",
        fav : 108,
        lyric : `เจ้าสายน้ำที่เย็นฉ่ำ ทำให้ใจผมชินและชา
        บทกวีที่เคยอ่าน มอบแด่คุณแค่เพียงผู้เดียว
        
        ดวงฤทัยมิอาจ มองผู้ใดที่เพียงเดินผ่าน
        คุณที่เป็นทุกอย่าง จากวันนี้และตลอดกาล
        คุณที่เป็นความหวานที่เหมือนดั่งขนม
        บางครั้งคุณก็ขมเมื่อผมต้องการยา
        ขอบคุณทุกทุกอย่างในวันนี้
        
        จะเปิดประตูให้คุณเมื่อคุณกลับมา
        จะคอยเตรียมน้ำเฝ้ารอเมื่อคุณอ่อนล้า
        เป็นวันที่เราก้าวผ่าน เรื่องราวจะคงอยู่สวยงาม`,
        audio : "/demo/Yew/แด่คุณ.mp3"        
    }
]

const Artistdata = [
    {
        image : "https://m.thaiticketmajor.com/img_artist/prefix_1/0264/264/264-5ea7d02c147ee-a.jpg",
        name : "Slipknot"
    },
    {
        image : "https://i.pinimg.com/736x/7b/46/45/7b4645a211633937815a10b6bc028d09.jpg",
        name : "Babymetal"
    },
    {
        image : "https://s.isanook.com/jo/0/rp/rc/w850h510/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2pvLzAvdWQvNDgyLzI0MTA2NjcvYWhyMGNkb3ZsM2F4bG1senl3NXZiMnN1eTI5dGwucG5n.png",
        name : "Youngohm"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/3/3b/%E0%B8%97%E0%B8%AD%E0%B8%A2_%E0%B8%98%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B2_%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99.png",
        name : "The TOYS"
    },
    {
        image : "https://yt3.ggpht.com/PoJESpwmccba8amhic0OcyxLdFopwYptBItocZF4qvd-T76Qw0Vi4hcJk--gObF9gy-8DQtXRQ=s900-c-k-c0x00ffffff-no-rj",
        name : "YEW"
    }
];

const Albumdata = [
    {
        image : "https://shop.metalscraprecords.com/image/catalog/Products/CD/NEW/SSS/666/SLIPKNOT/All%20Hope%20Is%20Gone/1.jpg",
        name : "All hope is gone"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/3/36/Babymetalcover.jpg",
        name : "Babymetal"
    },
    {
        image : "https://images.genius.com/078e9cef7c67bd42d3c4a66a6b11e3ba.1000x1000x1.jpg",
        name : "Bangkok Legacy"
    },
    {
        image : "https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9qb294LWNtcy1pbWFnZS0xMjUxMzE2MTYxLmZpbGUubXlxY2xvdWQuY29tLzIwMjEvMDkvMjYvMGU2NGU3NTMtYzY2ZC00YTc0LTlkZGMtOTRjOWY4YzliMzUwLmpwZy8xMDAw.jpg",
        name : "SUN"
    },
    {
        image : "https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzVmZTE5NTYxZjhjODM5ODUvMTAwMC5qcGc=.jpg",
        name : "Pauley & Jeen"
    }
];

function sendDB()
{
    User.remove({}, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Playlist.remove({}, (err)=>{
                if(err)
                {
                    console.log(err);
                }
            });
        }
    });
    Artist.remove({}, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Artist removal complete");
            Artistdata.forEach((artist)=>{
                Artist.create(artist, (err, artist)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                });
            })
        }
    });

    Album.remove({}, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Album removal complete");
            Albumdata.forEach((album)=>{
                Album.create(album, (err, album)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                });
            })
        }
    });

    Song.remove({}, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Song removal complete");
            seedSong(SlipknotSong, "Slipknot", "All hope is gone");
            seedSong(BabymetalSong, "Babymetal", "Babymetal");
            seedSong(YoungohmSong, "Youngohm", "Bangkok Legacy");
            seedSong(ThetoySong, "The TOYS", "SUN");
            seedSong(YewSong, "YEW", "Pauley & Jeen");
        }
    });
}

function seedSong(Songdata, artistname, albumname)
{
    Artist.findOne({name : artistname.toString()}, (err, artist)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            Album.findOne({name : albumname.toString()}, (err, album)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    album.artist = artist;
                    album.save();
                    Songdata.forEach((seed)=>{
                        Song.create(seed, (err, song)=>{
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                song.artist = artist;
                                song.album = album;
                                song.save();
                                console.log("Song : " + song.name + " Artist : " + artist.name + " Album : "+ album.name + " added");
                            }                            
                        });
                    });
                }
            });
        }
    });
}

module.exports = sendDB;