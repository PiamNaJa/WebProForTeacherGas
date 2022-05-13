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

const Artistdata = [
    {
        image : "https://m.thaiticketmajor.com/img_artist/prefix_1/0264/264/264-5ea7d02c147ee-a.jpg",
        name : "Slipknot"
    },
    {
        image : "https://i.pinimg.com/736x/7b/46/45/7b4645a211633937815a10b6bc028d09.jpg",
        name : "Babymetal"
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