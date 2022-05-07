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
            All hope is gone`
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
            America, what if "god" doesn't care?`
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
            Like breathing in sulfur`
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
            The limits of the dead!`
        },

        {
            image : "https://www.educatepark.com/wp-content/uploads/2015/05/Dead_Memories_album_cover.png",
            name : "Dead Memories", 
            genre : "Rock",
            fav : 31,
            lyric: `Sitting in the dark, I can't forget
            Even now I realize the time I'll never get
            Another story of the bitter pills of fate
            I can't go back again, I can't go back again
            But you asked me to love you and I did
            Traded my emotions for a contract to commit
            And when I got away, I only got so far
            The other me is dead, I hear his voice inside my head
            We were never alive
            And we won't be born again
            But I'll never survive
            With dead memories in my heart
            Dead memories in my heart
            Dead memories in my heart
            You told me to love you and I did
            Tied my soul into a knot and got me to submit
            So, when I got away, I only kept my scars
            The other me is gone, now I don't know where I belong
            We were never alive
            And we won't be born again
            But I'll never survive
            With dead memories in my heart
            Dead memories in my heart
            Dead memories in my heart
            Dead memories in my heart
            Dead visions in your name
            Dead fingers in my veins
            Dead memories in my heart
            Dead memories in my heart
            Dead memories in my heart
            Dead memories in my heart`
        },

        {
            image : "https://i.ytimg.com/vi/toJ9hf1__EI/maxresdefault.jpg",
            name : "Vendetta", 
            genre : "Rock",
            fav : 62,
            lyric: `I know my uses
            I have my pride
            But my heart is still untamed
            I learned my lessons
            I've conquered death
            I go on and I'm unashamed
            I'll paint your bones to match my eyes
            They're the darkest I have ever seen
            Until I'm lucid, I can't be told
            I know my voices
            They tell me to believe
            Another fucking accident out of control
            All the attitudes will never change
            My imitations are leading the way
            I can't accept that I still don't find this strange
            In light of my ability to feel denial
            I walk away from everything with just a smile
            The agony of coming home has gone away
            It's everywhere
            It's everyone
            It's every day
            Are you ready for the time of your life
            Are you ready for the time of your life
            I beg your pardon
            I'm out of the way
            A new conspiracy has taken my place
            So over and over, I smell the decay
            Believe what you want to, the cycle stays the same
            In light of my ability to undermine
            I walk away from apathy, I'm feeling fine
            The agony of cynicism beckons me
            It's everywhere, it's everyone, it's everything
            Are you ready for the time of your life
            Are you ready for the time of your life
            Are you ready for the time of your life
            Are you ready for the time of your life
            Let's, pretend, we're not at the end
            Pretend, that we have nothing left
            Let's, pretend, we're not at the end
            Pretend, that we have nothing left
            Let's, pretend, we're not at the end
            Pretend, that we have nothing left
            Let's, pretend, we're not at the end
            Pretend, that we have nothing left
            Are you ready for the time of your life
            Are you ready for the time of your life
            Are you ready for the time of your life
            Are you ready for the time of your life
            Are you ready for the time of your life
            Let's, pretend, we're not at the end
            Pretend, that we have nothing left
            Let's, pretend, we're not at the end
            Pretend, that we have nothing left`
        },

        {
            image : "https://i.scdn.co/image/ab67616d0000b273e7fbc0883149094912559f2c",
            name : "Butcher Hook", 
            genre : "Rock",
            fav : 72,
            lyric: `Contrite, commercial, arrogance, leprosy
            Consume the bitch, the fucker, mindless, like a child
            For pity's sake, I've had all that I can take
            We try, but in the end we'll see
            There are no more codes
            Only who is shit and who's still free
            I was gonna change the world with honor and aggression
            No one listened no one cared
            All they saw was misdirection
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            I don't want you anymore (I don't want you anymore)
            I don't need you anymore (I don't need you anymore)
            Fingerprint of God, your new religions covet
            This vessel wasn't built to last
            But I will live forever, you'll never have to say surrender
            Because you're so part of it
            My total honesty has no place for tomorrow
            Guilty pleasures give me pain
            Tell my people I can't follow
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            You'll never censor me, you'd better cherish me
            My reason has a voice, freedom's gone but we'll always have a choice
            My present future tense, it doesn't make much sense
            I'm coming after you, fuck you all I'm the only point of view
            Violence and dollar signs, another processed piece of shit
            You hide your fault in diamonds and give away the only
            Cost, you can't delay the inevitable
            Lost, don't understand the incredible path
            I'm losing ground, but I won't care when I go down
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            Go ahead and disagree, I'm giving up again?
            I'm giving up again?`
        },

        {
            image : "https://images.genius.com/388a8b0ca44dfc473bf6ae363a38e0ee.1000x1000x1.jpg",
            name : "Gehenna", 
            genre : "Rock",
            fav : 12,
            lyric: `Do you believe? Do you fade like a dream?
            Let me hear you breathe, let me watch as you sleep
            The sparrow's eyes, promises shift into judgments
            I cannot deny that you were designed for my punishments
            The blood and the body, control the cut so it's seamless
            Show me your heart, show me the way to complete this
            Tethered to a scene, I treasure, can you help me?
            I sever, God, it's perfect, it's never really perfect
            Now I can finally be myself
            'Cause I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            I cannot maintain a semblance of normal anymore
            I'd rather feel pain than try to fit in with you anymore
            I'll throw it all away like everybody else
            I can finally be myself 'cause I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself
            Free my severed heart, give me you, I want it
            I don't wanna be myself`
        },

        {
            image : "https://images.genius.com/388a8b0ca44dfc473bf6ae363a38e0ee.1000x1000x1.jpg",
            name : "This Cold Black", 
            genre : "Rock",
            fav : 99,
            lyric: `Mother nature is a coward (mother nature is a whore)
            No more presence, no more power (I pray for death, by the hour)
            Cut another smile into me (into me is all you are)
            My artifice won't recognize me (you won't find me) anymore
            Post-traumatic war machines, the pessimists still won't believe
            Throw away my past mistakes, it's all I can to feel
            Let my weapons be your children, let my armies be your damned
            Try to suffer on in silence, try to stop me if you can
            Pneumatic destroyer, pathetic seducer
            Distortion sufficient
            Some day, one day, we'll live our lives again
            My ghosts have found their way back home
            I have every right to kill my own
            I am something now that never could exist
            My anguish conquers all, pay the price and watch me fall
            My only key is broken, my broken key is only? Me
            Pneumatic destroyer, pathetic seducer
            Distortion sufficient
            Some day, one day, we'll live our lives again
            You utter waste of tired flesh,
            It doesn't matter if you can't progress
            Even now they still create me, give me your ignorance, irritate me
            I am made of the same debris, you want it all but you didn't want me
            Hypocrite with no real use, I'm alive, what's your excuse?
            Pneumatic destroyer, pathetic seducer
            Distortion sufficient
            Some day, one day, we'll live our lives again
            Pneumatic destroyer, pathetic seducer
            Distortion sufficient
            Some day, one day, we'll live our lives again
            We'll live our lives again`
        },

        {
            image : "https://images.genius.com/388a8b0ca44dfc473bf6ae363a38e0ee.1000x1000x1.jpg",
            name : "Wherein Lies Continue", 
            genre : "Rock",
            fav : 24,
            lyric: `Thou shalt not
            Kill your fathers, destroy another life
            Question everything we clung to for years
            Live forever, design a better death
            Confuse a liar with a savior from fear
            Create a myth and separate the chosen ones
            Adolescent independence, dominion
            I only wanna believe in fuckin' anything
            But now my conscience is contradicting everything
            The ending's the same, the world will not change
            The answer is clear
            Tell your mothers they have no sons or daughters
            Blame yourselves because your children are mine
            We are orphans, but we are not forgotten
            And we will find a way to save us this time
            We can run, but we are tired of running
            We're dropping seconds in a glass till we die
            We only wanna believe in fuckin' everything
            But we're alive and we're not accepting anything
            The ending's the same, the world will not change
            The answer is clear? annihilation
            I won't control or restrain things I do not understand
            Now I realize I'm stronger then I was
            They gave to me now I give to you the means to burn the thoughts I had
            Now I realize I'm stronger better more
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            I will never become another piece
            Inside the paralytic construct I hate
            Live forever? well, I would rather die
            At least I'd know I wasn't theirs to create
            This is yours, but you had better choose
            Before they take away your right to decide
            I guess I'll never believe in fuckin' anything
            But my solace is I can handle everything
            The ending's the same, the world will not change
            The answer is clear, obliteration
            I won't control or restrain things I do not understand
            Now I realize I'm stronger then I
            They gave to me now I give to you the means to burn the thoughts I had
            Now I realize I'm stronger better
            I won't control or restrain things I do not understand
            Now I realize I'm stronger then I
            They gave to me now I give to you the means to burn the thoughts I had
            Now I realize I'm stronger better more
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            We have to save ourselves
            `
        },

        {
            image : "https://i1.sndcdn.com/artworks-000102877952-v4drf6-t500x500.jpg",
            name : "Snuff", 
            genre : "Rock",
            fav : 31,
            lyric: `Bury all your secrets in my skin
            Come away with innocence and leave me with my sins
            The air around me still feels like a cage
            And love is just a camouflage for what resembles rage again
            So if you love me let me go
            And run away before I know
            My heart is just too dark to care
            I can't destroy what isn? t there
            Deliver me into my fate
            If I'm alone I cannot hate
            I don't deserve to have you
            Ooh, my smile was taken long ago
            If I can change I hope I never know
            I still press your letters to my lips
            And cherish them in parts of me that savor every kiss
            I couldn't face a life without your lights
            But all of that was ripped apart when you refused to fight
            So save your breath, I will not care
            I think I made it very clear
            You couldn't hate enough to love
            Is that supposed to be enough?
            I only wish you weren't my friend
            Then I could hurt you in the end
            I never claimed to be a saint
            Ooh, my own was banished long ago
            It took the death of hope to let you go
            So break yourself against my stones
            And spit your pity in my soul
            You never needed any help
            You sold me out to save yourself
            And I won't listen to your shame
            You ran away, you? re all the same
            Angels lie to keep control
            Ooh, my love was punished long ago
            If you still care don't ever let me know
            If you still care don't ever let me know`
        },

        {
            image : "https://images.genius.com/388a8b0ca44dfc473bf6ae363a38e0ee.1000x1000x1.jpg",
            name : "All hope is gone", 
            genre : "Rock",
            fav : 20,
            lyric: `The state of the nation – violation
            A broken promise is as good as a lie
            The hell is humongous, the Devil's among us
            And we will burn 'cause we won't unite
            What are we conceding for our freedom?
            Why does anybody think we need 'em?
            I would rather fight than let another die
            We're the problem, but we're also the solution
            All hope is gone
            If you want it, come and take it from me
            If you think you can, you still don't know me
            Let me tell you, man, I said it, I meant it
            And I will always have the right to defend it
            50 seconds, 100 murders
            The bill of rights is a bill of sale
            What will you do when the war is over?
            What will you do when your system fails?
            We have made the present obsolete
            What do you want? What do you need?
            We'll find a way when all hope is gone
            We've seen the fall of the elite
            Bury your life, take your disease
            We'll end the world when all hope is gone
            We have made the present obsolete
            What do you want? What do you need?
            We'll find a way when all hope is gone
            We've seen the fall of the elite
            Bury your life, take your disease
            We'll end the world when all hope is gone
            The wretched are the wounded, the hungry starve to death
            In a place where no one goes, the air itself is a final breath
            So discontinue the antiseptic care charade
            As a cry of justice comes, a malignant fire fades
            I am the reason your future suffers
            I am the hatred you won't embrace
            I am the worm of a pure gestation
            I am the remedy, spit in my face
            All your laws and rules are outdated
            All your subjects are killing the kings
            I could rattle off a million other reasons why
            But does it matter when the only thing we love will die?
            We have made the present obsolete
            What do you want? What do you need?
            We'll find a way when all hope is gone
            We've seen the fall of the elite
            Bury your life, take your disease
            We'll end the world when all hope is gone
            We've made the present obsolete
            What do you want? What do you need?
            We'll find a way when all hope is gone
            We've seen the fall of the elite
            Bury your life, take your disease
            We'll end the world when all hope is gone
            When all hope is gone
            When all hope is gone
            When all hope is gone`
        },

        {
            image : "https://images.genius.com/388a8b0ca44dfc473bf6ae363a38e0ee.1000x1000x1.jpg",
            name : "Child Of Burning Time", 
            genre : "Rock",
            fav : 55,
            lyric: `The child of burning time
            The child of burning time
            My only consolation is all lies
            The apex of my consequence is dying here tonight
            Winter hasn't ended, and it always looks like rain
            I can't remember anything, anything
            Inside the absolution, we succumb
            And appetites are bittersweet, I think I'm going numb
            A chance to give up avarice has marked my one regret
            The child of burning time is gone, and he hasn't come back yet
            Before I tell my story, please consider who I am
            I missed my window years ago, I'm doing all I can
            A tragedy is commonplace, but in the end, they go away
            My skin is still the only stain I'm left to wear in shame
            I cut my name into my heart
            I'll tear it all apart
            I beg you burn me away
            I won't become your hero just to fight the life I save
            Burn me away
            I won't give up tomorrow just to lose it all today
            I burn away, I burn away
            I burn away, I burn away
            My isolation is my course
            The effect it has on life itself is a cancer on its source
            I rue the moments spent between the fetish and the flame
            Until this war is over, I won't ever lose my rage
            I cut my name into my soul
            I guess I'll never know
            I beg you burn me away
            I won't become your hero just to fight the life I save
            Burn me away
            I won't give up tomorrow just to lose it all today
            Burn me away
            I won't become your hero just to fight the life I save
            Burn me away
            I won't give up tomorrow just to lose it all, lose it all today`
        },

        {
            image : "https://images.genius.com/388a8b0ca44dfc473bf6ae363a38e0ee.1000x1000x1.jpg",
            name : "Til 'we die", 
            genre : "Rock",
            fav : 33,
            lyric: `Our friends are all hurting from moments and regrets
            And charity laced with a lie
            Still we keep hoping to fix all the defects
            And strengthen these seminal times
            We go on together for better or worse
            Our history is too real to hate
            Now and forever, we stay until morning
            And promise to fight for our fate
            Till we die
            Till we die
            Start of the journey is every bit worth it
            I can't let you down anymore
            The sky is still clearing, we're never afraid
            And the consequence opens the door
            I never stopped trying, I never stopped feeling
            Like family is much more than blood
            Don't go on without me, the piece that I represent
            Compliments each and everyone
            Till we die
            Till we die
            We won't be forgotten, we'll never give in
            This war we've achieved has allowed us to win
            Till we die
            Till we die
            My last true confession will open your eyes
            I've never known trust like the night
            Let it be spoken, let it be screamed
            They'll never ever take us alive
            Till we die
            Till we die
            We won't be forgotten, we'll never give in
            This war we've achieved has allowed us to win
            Carry on
            Carry on
            We'll never be broken, we won't be denied
            Our war is the pressure, we need to unite
            We'll never be broken, we won't be denied
            Our war is the pressure, we need to unite
            Till we die
            Till we die
            We won't be forgotten, we'll never give in
            This war we've achieved has allowed us to win
            Carry on
            Carry on
            We'll never be broken, we won't be denied
            Our war is the pressure, we need to unite
            Till we die
            Till we die
            Till we die
            Till we die
            Till we die
            Till we die`
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
        DEATH!!`
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
        
        Ah~ah..`
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
        Rappappappaa paapapapapaa`
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
        (Iine! Iine! Iine! Iine!)`
    },
    {
        image : "https://www.guitartabsexplorer.com/images/tabs/babymetal_akatsuki.jpg",
        name : "Akatsuki", 
        genre : "Rock",
        fav : 38,
        lyric: `Ikusen mo no yoru o koete
        iki tsuzukeru ai ga aru kara
        kono karada ga horobiru made
        inochi ga kieru made
        mamori tsuzukete yuku
        
        Hitomi no oku ni hikaru
        nakidashi-soona tsuki wa
        akai namida afurete
        yozora o somete yuku
        
        Seijaku no naka de
        kizutsuita yaiba sashi-mukai
        kodoku mo fuan mo
        kiri-tsukeru, kokoro made
        
        Ikusen mo no yoru o koete
        iki tsuzukeru ai ga aru kara
        kono karada ga horobiru made
        inochi ga kieru made
        mamori tsuzukete yuku
        
        Sugite yuku toki no naka
        hitomi o tojita mama
        kono te ni nagareru akai ito kiretemo
        kanjite-iru, kizuna o
        
        Seijaku no naka de
        kizutsuita yaiba sashi-mukai
        kodoku mo fuan mo
        kiri-tsukeru, kokoro made
        ima
        
        Ikusen mo no yoru o koete
        iki tsuzukeru ai ga aru kara
        kono karada ga horobiru made
        inochi ga itsuka kieru made
        
        Ikusen mo no yoru o koete
        iki tsuzukeru ai ga aru kara
        kono karada ga horobiru made
        inochi ga kieru made
        mamori tsuzukete yuku
        
        Akaku somare! Makka ni somare!`
    },
    {
        image : "https://i.ytimg.com/vi/cirhQ8iLdbw/maxresdefault.jpg",
        name : "Doki Doki Morning", 
        genre : "Rock",
        fav : 89,
        lyric: `Pattsun pattsun maegami pattsun (Cutie style)
        Yappa icchokusen nara ittoushou yo (cho sugoi!)
        Kyou no rippu accho? Kocchi? Socchi? Docchi?
        Which? Chocchi? Uocchi ima nanji?
        
        Shuugou shuugou houkago shuugou (Party Time)
        Datte joshikai sanka de gaaruzu tooku yo (cho yabai!)
        Kyou no VIP acchi? Kocchi? Socchi? Docchi?
        Which? Chocchi? Uocchi ima nanji?
        
        Shiranai furi wa kirai! Kirai!
        Shiranai sekai mitai! Mitai!
        Yo jigen go jigen kitai! Kitai!
        10 pasento senobi shitai! Shitai!
        Yo ne?
        
        Rin rin rin! Ohayou Wake Up
        Onegai! Cho matte! Cho matte!
        Ring Ring Ring! Aserazu Hurry Up
        Bata bata morning
        
        Rin rin rin! Awatezu Make Up
        Onegai! Cho matte! Cho matte!
        Ring Ring Ring! Today wa Version Up
        Doki doki morning
        
        Suppin suppin megane ga heapin (Funny face)
        But san pyou matte ne sokko henshin (cho hayai!)
        Kyou no RAP acchi? Kocchi? Socchi? Docchi?
        Which? Chocchi? Uocchi ima nanji?
        
        Shiranai furi wa kirai! Kirai!
        Shiranai sekai mitai! Mitai!
        Yo jigen go jigen kitai! Kitai!
        10 pasento senobi shitai! Shitai!
        Yo ne?
        
        Rin rin rin! Ohayou wake up
        Onegai! Cho matte! Cho matte!
        Ring, ring, ring! Aserazu hurry up
        Bata bata morning
        
        Rin rin rin! Awatezu make up
        Onegai! Cho matte! Cho matte!
        Ring, ring, ring! Today wa version Up
        Doki doki morning`
    },
    {
        image : "https://image.jimcdn.com/app/cms/image/transf/none/path/sfeb3e2f9ecd74f84/image/i20dd8bb7bc23ace7/version/1416281024/image.jpg",
        name : "Onedari Daisakusen", 
        genre : "Rock",
        fav : 70,
        lyric: `Sakusen-1
        Itsumo ijou ni kigen tori 
        katamomi sukasazu [PAPA daisuki]
        Sakusen-2
        Otsukaresama [kamisama]
        Suki na TAIPU wa mochiron [PAPA daisuki]
        
        Uso demo ii! [enryo wa muyou!]
        homemakure! [gomasuri gomasuri!]
        are mo hoshii! [mou sukoshi kamase!]
        kore mo hoshii
        
        [Tenshi no kao shita akuma no sasayaki]
        [Sekkyou suru nara kane wo kure]
        [Tenshi no kao shita akuma no sasayaki]
        
        [Watashi, PAPA no oyomesan ni naru nda]
        
        Let’s go! Let’s go!
        Onedari sakusen
        kawaiku [punpun] dada konero!
        saikyou no [oh] Saikou no [oh]
        tenshi no egao ni damasaresou da
        Let’s go! Let’s go!
        Onedari sakusen
        MAMA ni naisho de GETTO shichao !
        saikyou no [oh] Saikou no [oh]
        choudai.. Choudai..
        Onedari sakusen
        
        Onegai.. [saigo no] onegai.. [itsumo no]
        Kekkon suru nara yappari [PAPA]
        Onegai.. [saigo no] onegai.. [itsumo no]
        Dadakko kamasu [BLACK BABYMETAL]
        Onegai.. [saigo no] onegai.. [itsumo no]
        Isshou ichido no [saisho de saigo no]
        Onegai.. [saigo no] onegai.. [itsumo no]
        Koakuma kimeru [BLACK BABYMETAL]
        
        Datte onna no ko da mon
        kirakira shiteru no daaisuki..
        kawaii no daaisuki..
        oishii mono daaisuki..
        
        One for the money!
        Two for the money!
        Three for the money!
        Money! Money! Money! Money!
        
        One for the money!
        Two for the money!
        Three for the money!
        Money! Money! Money! Money!
        
        One for the money!
        Two for the money!
        Three for the money!
        Money! Money! Money! Money!
        
        One for the money!
        Two for the money!
        Three for the money!
        Money! Money! Money! Money!
        
        Katte! Katte! Katte! Katte! Katte! Katte! Katte! Katte!
        Choudai! Choudai! Choudai! Choudai! Choudai! Choudai! Choudai! Choudai!
        
        Katte! Katte! Katte! Katte! Katte! Katte! Katte! Katte!
        Choudai! Choudai! Choudai! Choudai! Choudai! Choudai! Choudai! Choudai!
        
        Let’s go! Let’s go!
        Onedari sakusen
        kawaiku [punpun] dada konero!
        saikyou no [oh] Saikou no [oh]
        tenshi no egao ni damasaresou da
        Let’s go! Let’s go!
        Onedari sakusen
        MAMA ni naisho de GETTO shichao !
        saikyou no [oh] Saikou no [oh]
        choudai.. Choudai..
        Onedari sakusen
        
        Onegai.. [saigo no] onegai.. [itsumo no]
        Kekkon suru nara yappari [PAPA]
        Onegai.. [saigo no] onegai.. [itsumo no]
        Dadakko kamasu [BLACK BABYMETAL]
        Onegai.. [saigo no] onegai.. [itsumo no]
        Isshou ichido no [saisho de saigo no]
        Onegai.. [saigo no] onegai.. [itsumo no]
        Koakuma kimeru [BLACK BABYMETAL]`
    },
    {
        image : "https://i.ytimg.com/vi/dDFI-f-V8gs/maxresdefault.jpg",
        name : "Song 4", 
        genre : "Rock",
        fav : 67,
        lyric: `Yon, yon! Yon, yon! Yon, yon! Yon, yon!

        Ichi no tsugi wa ni. He, hei!
        Ni no tsugi wa san. He, hei!
        San no tsugi wa, uu, yon. Foo!
        
        Yon, yon! Yon, yon! Yon, yon! Yon, yon!
        
        Nana no mae wa roku. He, hei!
        Roku no mae wa go. He, hei!
        Go no mae wa, uu, yon. Foo!
        
        Yon, yon! Yon, yon! Yon, yon! Yon, yon!
        
        Shiawase no shi
        Shinu ja nai shi. Foo!
        Shippai no shi
        Yoroshiku no yon. Foo!
        
        Shiawase no shi
        Shinu ja nai shi. Foo!
        Bitamin no shi
        Yorokobi no yon
        Yon. Yon. Yon. Yon. Foo!
        
        Yon, yo, yo, yo, yon, yon
        Yon, yo, yo, yo, yon, yon. Yoishoo!
        Yon, yo, yo, yo, yon, yon
        Yon, yo, yo, yo, yon, yon. Yokkorasho!
        
        Yon, yo, yo, yo, yon, yon
        Yon, yo, yo, yo, yon, yon. Yosshaa!
        Yon, yo, yo, yo, yon, yon
        Yon, yo, yo, yo, yon, yon. Oishii!
        
        Yon, yon! Yon, yon! Yon, yon! Yon, yon!
        
        Ichi no tsugi wa ni. He, hei!
        Ni no tsugi wa san. He, hei!
        San no tsugi wa, uu, yon. Foo!
        
        Nana no mae wa roku. He, hei!
        Roku no mae wa go. He, hei!
        Go no mae wa, uu, yon. Foo!
        
        Yon, yon! Yon, yon! Yon, yon! Yon, yon!
        Yon, yon! Yon, yon! Yon, yon! Yon, yon!
        
        Shiawase no sh
        Shinu ja nai shi. Foo!
        Shippai no shi
        Yonaoshi no yon. Foo!
        
        Shiawase no shi
        Shinu ja nai shi. Foo!
        Oishii no shi
        Yorokobi no yon
        Yon. Yon. Yon. Yon. Foo!
        
        Yon, yon! Yon, yon! Yon, yon! Yon, yon!`
    },
    {
        image : "https://i.ytimg.com/vi/wFO2sYncwt8/maxresdefault.jpg",
        name : "Uki Uki Midnight", 
        genre : "Rock",
        fav : 10,
        lyric: `Denki o keshite genki o chaji
        Korya hajimaru yo Uki uki ★ midnight
        Sorosoro honki to kaite maji!
        Agepo yo ¯ de pikapika miraboru
        
        Geso! Geso! Ikageso ga tabetai!
        Atashi wa surume-hana ¯ no! Yada! Yada!
        Oji-chan mitai!
        Kyawai okashi ni shiyou YO!
        
        Shonen shojo yo!
        Okashi to yume ippai tsumete
        Ima atsumare!
        Atashi n ie Party night!
        
        Anata to watashi You and Me 
        Koyoi wa tanoshi Uki Uki ★ midnight
        Mongen Closing Time
        Nononono! No way!
        Madamada tsudzuku yo
        Kinkiriariiiiiinnnnn!!!
        
        Denki o keshite genki o chaji
        Korya hajimaru yo uki uki ★ midnight
        Sorosoro honki to kaite maji!
        Agepo yo ¯ de pikapika miraboru
        
        Shonen shojo yo!
        Okashi to yume ippai tabete
        Ima tobidase!
        Atashi n ie Party night! !
        
        Anata to watashi You and Me
        Koyoi wa tanoshi Uki Uki ★ midnight
        Mongen Closing Time
        Nononono! No way! 
        Madamada tsudzuku yo
        Kinkiriariiiiiinnnnn!!!
        
        Nemuku natte kita onaka mo ippai
        Demo korekara ga kuraimakkusu
        Shoboshobo o-me me kosu~u tte maji!
        Agepo yo ¯ de kinkirarin!
        
        Denki o keshite genki o chaji
        Korya hajimaru yo uki uki ★ midnight
        Sorosoro honki to kaite maji!
        Agepo yo ¯ de pikapika miraboru`
    },
    {
        image : "https://i.ytimg.com/vi/H_yATzyi-3g/maxresdefault.jpg",
        name : "Catch Me If You Can", 
        genre : "Rock",
        fav : 40,
        lyric: `Ooi! Mou Ii Kai? Mou Ii Kaai!?
        Maada Dayo!
        Ooi! Mou Ii Kai? Mou Ii Kaai!?
        Maada Dayo!
        
        Acchi Kana? Kocchi Kana?
        Sate Onisan Doko Deshou?
        Zettai Ni Mitsukaranai
        Totteoki No Basho Wo Hakken!
        
        Ooi! Mou Ii Kai? Mou Ii Kaai!?
        Maada Dayo!
        Ooi! Mou Ii Kai? Mou Ii Kaai!?
        Maada Dayo!
        
        Migi Hidari? Kyorokyorori?
        Yada Dokidoki Tomannai!
        Ii Yo! Mitsukerareru Mon Nara
        Mitsukete Minasai Minasai Na!
        
        Ooi! Mou Ii Kai? Mou Ii Kaai!?
        Maada Dayo!
        Ooi! Mou Ii Kai? Mou Ii Kaai!?
        Maada Dayo!
        
        Onisan Kochira
        Te No Naru Hou He
        Onisan Kochira
        
        Mou Ii Yoo!
        
        Wow Wow……Guruguru Kakurenbo
        Mawattemasu (Voi!) Mawattemasu (Voi!)
        Ashimoto Gochuui? (Hora Tsukamaetee!)
        Wow Wow……Guruguru Kakurenbo
        Akai Kutsu (Hai!) Haicha Dame (Non!)
        Denjarasu Da Mon
        
        Nekugo Wa I Ne Ga!
        Waruigo I Ne Ga
        
        Onisan Kochira
        Te No Naru Hou He
        Onisan Kochira
        
        Miitsuketa!
        
        Wow Wow……Guruguru Kakurenbo
        Akaonisan (Voi!) Aoonisan (Voi!)
        Suteppu! Suteppu! (Wan Tsuu! Wan Tsuu!)
        
        Wow Wow……Guruguru Kakurenbo
        Koronde Mo (Hai!) Naicha Dame (Non!)
        Tsuyoi Kosan Da Mon
        
        Mada Mada Iku Yoo!
        
        Wow Wow……Guruguru Kakurenbo
        Wow Wow……Guruguru Kakurenbo
        Akai Kutsu Haicha Dame Denjarasu Da Mon`
    },
    {
        image : "https://i.ytimg.com/vi/8WBDiLMNZcE/maxresdefault.jpg",
        name : "Rondo of Nightmare", 
        genre : "Rock",
        fav : 80,
        lyric: `Kaketa tsuki ga terashi dashita
        kageri no naka habikoru kyooki
        Warai-goe hibiki watari
        kiba o muite me o hikaraseteru
        Nigerare-nai
        
        Yura yura yurameku
        kokoro ni mie kakure
        Akumu no rondo ga kurikaesareteru
        Mezame no hikari wa
        haruka kanata mie-naku nari
        tada hashiri nukeru
        yami no naka o
        
        Mori no naka izumi no naka
        iki o koroshi mi o hisomete mo
        semari kuru sugu chikaku ni
        Yodonda koe. Owara-nai yoru
        Aa...
        
        Moo koko kara derare-nai no nara
        anata no sugata o misete wa kure-nai ka?
        
        Yura yura yurameku
        kokoro ni mie kakure
        Akumu no rondo ga kurikaesareteru
        Mezame no hikari wa
        haruka kanata mie-naku naru
        Tada ochite yuku no
        yami no naka e`
    },
    {
        image : "https://resize.cdn.otakumode.com/exq/65/820.812/shop/product/16790618285746bab3e46e3aa3954baf.jpg",
        name : "Headbangeeeeerrrrr!!!!!", 
        genre : "Rock",
        fav : 48,
        lyric: `Densetsu no kuro-kami wo
        Karei ni midashi
        Kurui zaku kono hanawa
        Hakanaku kieru
        
        Hedobang Hedobang
        Hedobang Hedobang
        Hedobang Hedobang
        Pan pan pan pan
        
        Saa toki wa kita
        Mo o mayowa-nai
        Nigiri-shimeta no
        Juuhachi-kippu
        Higashi e nishi e
        Minami e kita e
        Kyoo mo do-sen ni totsugeki
        
        Kamite. Koi ya!
        Shimote. Koi ya!
        Chokuritsu-fudoo nokezori
        Gyaku-dai. Kara no!
        Saku-dai. Kara no!
        Koro-dai. Kara no!
        Oritatami
        
        Ichigo no yoru o
        Wasure wa shi-nai
        Naki mushi na yasu wa
        Koko kara kie-usero
        
        Densetsu no kuro-kami wo
        Karei ni midashi
        Kurui zaku kono hanawa
        Hakanaku kieru
        
        Moo nidoto modore-nai
        Wazukana toki wo
        Kono mune ni kizamunda
        Ichigo no yoru o
        
        Hirari chuu ni mau
        
        Hedobangyaaa!
        
        Hedobang Hedobang...
        
        Ichigo no yoru o
        Wasure wa shi-nai
        Naki mushi na yasu wa
        Koko kara ki-e-ro
        
        Ichigo no yoru o
        Wasure wa shi-nai
        Jama o suru yatsu wa
        Sokuzani kie-usero
        
        Densetsu no kuro-kami wo
        Karei ni midashi
        Kurui zaku kono hanawa
        Hakanaku kieru
        
        Moo nidoto modore-nai
        Wazukana toki wo
        Kono mune ni kizamunda
        Ichigo no yoru o
        
        Densetsu no kuro-kami wo
        Karei ni midashi
        Kurui zaku kono hanawa
        Hakanaku kieru
        
        Moo nidoto modore-nai
        Wazukana toki wo
        Kono mune ni kizamunda
        Ichigo no yoru o
        
        Hirari chuu ni mau
        
        Hedobang Hedobang
        Hedobang Hedobang
        Hedobang Hedobang
        Pan pan pan pan
        
        Hedobangyaaa!
        
        Hedobang Hedobang...`
    },
    {
        image : "https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/e/e5/BABYMETAL_-_Ijime,_Dame,_Zettai_(cover).jpg/440px-BABYMETAL_-_Ijime,_Dame,_Zettai_(cover).jpg",
        name : "Ijime Dame Zettai", 
        genre : "Rock",
        fav : 109,
        lyric: `Rururu~

        Yume o miru koto sore sae mo motenakute
        Hikari to yami no hazama hitori
        Kizutsuita no wa jibun jishin dake janaku
        Mitsume tsudzukete kureta anata
        
        Jishin (Motte) motezu (makenaide)
        Kakure tsudzuketa (ijikechaiya)
        Kinou (yesterday) made no
        Jibun sayonara (bye bye)
        
        Ijime (dame) ijime (dame)
        Kakkowaruiyo (dame dame dame dame)
        Kizutsuite kizutsukete kizu
        Darake ni naru no sa
        Kitsune (Tobe) kitsune (Tobe)
        Kitto toberu yo (tobe tobe tobe tobe)
        Kurushimi mo kanashimi mo subete tokihanate
        Kimi o mamorukara
        
        Namida misezu ni naki dashi souna yoru wa
        Kokoro no oku no heya ni hitori
        Kizutsuketa no wa hoka no dareka dake janaku
        Kidzukanai furi shi teta nakama
        Nani mo (nasshin) iezu (Say nothing)
        Akirame kaketa (poisutekinshi)
        Kinou (yesterday) made no
        Jibun sayonara (bye bye)
        
        Ijime (dame) ijime (dame)
        Kakkowaruiyo (dame dame dame dame)
        Kizutsuite kizutsukete kizu
        Darake ni naru no sa
        Kitsune (Tobe) kitsune (Tobe)
        Kitto toberu yo (tobe tobe tobe tobe)
        Kurushimi mo kanashimi mo subete tokihanate
        Kimi o mamorukara
        
        (Itami) (kanjite) (zutto) (hitori) (kokoro)
        (Kidzukanai furi) (mou nigenai)
        (Ijime dame zettai)
        
        Itoshikute setsunakute kokoro dzuyokute
        Kore ijou mou kimi no nakigao wa mitakunai
        
        Ijime (dame) ijime (dame)
        Kakkowaruiyo (dame dame dame dame)
        Kizutsuite kizutsukete kizu darake ni naru no sa
        Kitsune (Tobe) kitsune (Tobe)
        Kitto toberu yo
        Kurushimi mo kanashimi mo subete tokihanate
        Kimi o mamorukara
        
        Ijime dame zettai (dame dame dame dame)
        Ijime dame forever
        Ijime dame zettai (dame dame dame dame)
        Ijime dame dame`
    },
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