/**
* Game class which is at the core of the project, this is the first
* class that should be initialized as all of the other classes rely
* on it as an interface to the Phaser Library.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
* @class
*
* @param {number} width The width of the game
* @param {number} height The height of the game
* @param {String} name The name of the game
*/
function Game(width, height, name){

    /** @member {Phaser.Game} */
    this.world;
	/** @member {Phaser.Background} */
    this.background;
	/** @member {Phaser.Background[]} */
    this.backgrounds;
	/** @member {function} */
    this.functionToUse;
	/** @member {args[]} */
    this.args;

    /**
	* The constructor used to encapsulate the code run when the object
	* is first instantiated. It is called at the bottom of the file.
	* So it does not need to be called as it has already been called.
    *
    * @private
	*/
    this.constructor = function() {

        // This is a singleton so only create it if it has not already been created
        if (typeof Game.INSTANCE == 'undefined') {

            // If the name is set use it or use the default
            this.name = name || "My Headstart Game";

            // Default width and height
            width = width || 800;
            height = height || 600;

            // Set the document title to the name
            document.title = this.name
            // Create the phaser object - passes in an array of default functions
            this.world = new Phaser.Game(width, height, Phaser.AUTO, name, { preload: preload, create: create, update: update });

            this.backgrounds = [];
            // Set up the 'static' instance
            Game.INSTANCE = this;

        }

    }

    /**
	* Load an image to use as the background, can be used multiple times
	* if you want different backgrounds in your game
	*
	* @param {String} key The name of the reference to give the image for future use
	* @param {String} image String reference of the image to use for the player
	*/
    this.loadBackgroundImage = function(key, image) {

        // If this key has already been used
        if(this.backgrounds.indexOf(key) != -1)
            throw new Error("You have already used the key \"" + key + "\ for your background images! Please use another one!");

        // Add the key to the array
        this.backgrounds.push(key);

        // Load the image into memory
        this.world.load.image(key, image);
    };

    /**
	* Set the specified image as the background
    *
	* @param {String} key The name of the background to load
	* @param {number} width The width of the background, should be bigger then the canvas if scrolling
	* @param {number} height The height of the background, should be bigger then the canvas if scrolling
	* @param {number} x The x position to start the background from the top left hand corner
	* @param {number} y The y position to start the background from the top left hand corner
	*/
    this.setBackgroundImage = function(key, width, height, x, y) {

        // Key is not been setup
        if(this.backgrounds.indexOf(key) == -1)
            throw new Error("The key \"" + key + "\ has not been set for your background image!");

        // By default x and y coordinates are 0
        x = x || 0;
        y = y || 0;

        // Get the image from its key
        var image = this.world.cache.getImage(key);

        // Default width is the width of the image
        width = width || image.width;
        height = height || image.height;

        // Set the background
    	this.background = this.world.add.tileSprite(x, y, width, height, key);

    }

    /**
	* Game Height function that returns the height of the game, useful when
	* a percentage is given as the size in pixels will be returned
	*
	* @return {number} Returns the height of the game in pixels
	*/
    this.gameHeight = function(){
        return this.world.world.height;
    };

    /**
	* Game Width function that returns the height of the game, useful when
	* a percentage is give ab  % 1HzD   ``pDh1 ri   @ D0 B$$      D4@  Q*   b0 dpt`FS  hA $$0( EF 0 A ca( a` p!0@!
*"
    @A$$`e	 d (  `NL(          EdPn ir %B$b!" 3H$ H:
    H 	$(  Rac,D  (  @!"k'2D4"d a,B E 0h$ p  (@
"
  @0`@`	 :DaDRM ` $  ecP K cr `D p  @`'P5 ` "Q a(@D 0(   !"'     0 !CS#0idHA`Bg2"1h P   %J"4`$(H k
     tH1. Cb! g d
 (L@@% @)fL  8 *    
	, 	 Bm  t@A `Ac	p%qh  L,` @h @ @r  (
"   @R 8n!"$b\ 	  H` !ioa   Pl #B@L` P E "A b O5dd bH  d 0(a ) @p 
     tH) r" lA c2j$   bt  )(hA 9
    	 	B&b !Ic"Ga$PD! 	taK`* + @     9 ,  " Cd4 d ` !qR Ht  %% `AM Ab )IHli`ndr
"	" @2$DA"N 2f L"d2< 0(  Ha  R!d@ g@%! dA !. m	` `q !F`  "    H)3$0 THE  deFb@hb@       R  $ p(` qK $4@ *`+ 3    t 


 	" ae@ t@  &A!  "    T`Q, !T D 	 dj!D@!b(	     P)$wkRL $pa`dD  $rQ 	    P
    (" BdAE T ! &`m%  !     $ Hc
 2 % 8 `$"C0Hmf(  i
    ` )  !lRh$&  pcD  a!%(     %     
    
 $`  @  aA0OT*$ aF,@ j  4Ha @, ( @h1 hS rh#cL  b
      p(e0d I N iADd   b$H`Hp . @     
       @p!) AS@  LX codLu `E  d
0 do 3 $ PH bHdB"       IqbP  ` ` HdxA E"	%, @NDD "      (    hi1!!P@A'R $JDgEP  $b@)J#/  T" #        @H`!&CRL$"TA#!& aH$`$.O" =  L `p     !

    $* @ae$ T  !0 d@a  `&@a A3 $" 3 `bH@Ec      @PP@ 0O`@ Dt L *1  ( dA Cd "Bh !T 4/ 0C p
	* @param {O j0l O"  H` r`"JD )bE!   n 3`@ 
 )     DAA.34@P 9 q pha Gh!, l@b P 
       $i$ Dp0a d $
 ($/P =  d"`a`d$D"  Da@,  `j2 pg%@  0 "! @  `%@              t @e " @2PkP jp     !ERPd4A ).H 340 S02(0A"         0         '& B!4 ph n J%A s  a
H$1
        r @ a *IB$`H  j"h0"BAP&2
         F!" !Bj0JH& EH  J@H0 B@@` x2         !, C$   $ Gb@tA ID$0 0 h  4  @ b   p`e0   d DhD 8 in @0 ( 0        $!2 B(` H 5 i D    % 
          r ( @n $h    0B
$!H 	   
          %@rd`#a@ P) t(A  hl@@  @d"E + Jpq  A`p@2!"P        4a  B`)@@  A%t
@d"A E$C` ,n#j1HndhP3
        0 2 A`@`   DLe
t p ` !`a BhI@bDjK2`E@        $ giPCh 4 `  F  p! !rlBd        .`j 
'p+ 2 	 `@"Ib `P	         (*%rLq&B  c@H0In! 
         " BD   $ D o h`!  o, p d A!%S P@d         DA$@(`)L$s$aD(!H( @`AdHb 	f  (U  !HH 3
        B $D&c2Ld"pD@`("L@"H `b"	,`@pI , `  $A8   
     +(*      HAa" `) HAils  @0We%J pcm ) jaB4
          P3   @eF!L)           0 Ae C  D ``
    e d(prD n " t " "``"c   `c $AaH	J !& @(d     @@ 0`M Mb%aT & 
 @% 2$" J` j`BD@  " a aA(  m(hh	&     	J       PA2!` 8`M !`n| EF! @P  d #" bh!  d #eD (Q,J ` H5@   %SaD    " @`@@ D 	T, dAH dJ#pil."@A @`  abBta    A``$ b(* A L@h1
 !!  $T@ d     * @0aPAE r fz  @2e "PA! n  @bAp$!jt1 `H A0 P@R+q( $/ "%B Hl.Dj        @!0` ZU &   @Hdh(N hBA "$	m(D.BA A `u@`INf `@ `$  beF*2@ # l`
 "pf!iO&#T@ rh`` @1
                                               a``@  t hdl Ds ) @ D!`h/L  `H T	+nDcT3  0 d@  T1E
       0	ba E    
	
    $H $AKDL S %F 9 4
b`@  b
!$ h"0  eA0( f4b !FjD`, A@'  `$ io  DEf#4I#@@
pa) P         +  $a @hdH  ` b`p0%` mr0A 4,Y
        bb  9 kb pA(D1)+         a"H" ,  H!BtTxPe f `  
        	f(p`P!" b5  $(ANTA!@ 5  EN @$ `D#             B a !*(A@  BDl) 
        I`(Od !$@)4 '"`HF0Fb@(@DAsA <0 #1d%A" D&            ` D H `B$"`tibfDTAd 1  4d         ) D $  pEb   Bi Dd A0        A& @x djD B$ H! <   PH` `$d'              NeR�p 9 Fal0E!         DH!rbqJ @J*mAp$  @pb#ta&dQ@

           1AE#  @"Db 

        FA0 #-@ I E@ , a`         `(D@ l!@            a,Ddad   h 0*Qr  (HCaCa`0ba AR`L!0 " @ b  p(`@"Dd J( @@0(*N`@U
"DilB d S`  `(h`(        al2             @ (L @`  pHI@ER "p@	rH`##@DA )`@a  (bj1 K    ha2  L,B!! @`ihIfA@ AIhPUC!  p`(P         T((A F%@4(Jf IB ``dLa 0ari Dp!,  Q(  r#q A
d "F#t`
DDlE#E mA{ bm qdP  `   !  3O !nS5Re pHE{ ar% UNVe<@or T L nExt iTeRaiOn    $   if(!oHLided) {*     @      t +S.Arg3@9 null/       `    TheR.F]jktcgnvoSd  lul@;     !  }
         Rdt52* H` thEr% }is A Cjl	QiDn
        R$tUCJ colli$%d

    }
$  -
* @!  C`Ecj cMld -Ons $Tveen two mbjeCp2j$"  *
   
 @0a2AM ibJct= /bj1 THe(firs0 o``d T/ C`E"k a ColliqIg/b@ga!N3t"    
 `param 8*c#T] Bhr Tje sEcoND mF
E`T 4 chca( A coLlision$A@ InSB    *@Papam {fUNctION=ad<cpi/hTGU3T(g nunctIon Tg ccl Fe, a collision `R de'Gpe`
    
 `xaram {aresX\m ar#S r20Y mf arGumeLdp Po paS th Oqeh to funCtIOnTkUr!J    j @raram [Fun#Ib} ADct(mlalfuf`tionT`us% A f#4i, tO aai,bbE`mr CALd	nF Du.Cpho"oUr%,Uill odX"   *$ca$H fuNctiOLTousE `s iddItion`Lfu.cdImgDoUWA Fe4ubo0 ppue
    *.
   "Dh	S.ChackAg,Lisco
 8 BunC4)O/(o"+  $"*, unIonoUrC( crgs, kDDi4aoolFUnbTMNjus$i {
        3Et5pn$u`)q.COllision(Obj1, ob*2, f!l# tNbdmlNDo5S, a03, alditioFalfunctin.T.USd)
    }    % " @ ( ChecK ov%Rla 0ihG bA<~%el two obJaBt1
   *
 !  
  apAm {Obje#T ob(1 THA faPsp KBbEct 4O$Ch!K A bl$isIol agaiNst
    
 @pr!M!{lBJecp} OBJ <Ha second Objbd DO b(dCc A "llliSion aG`Hn3@  `  @paP`m {functiOn] duNcPg*T/Se Phe tjcTho to cAll when a Cchhi3IoN hq detecte$    * @papam?A"CSOy ar&R array of APg5I%
p0 t/ p@s3 d(J/uGh!Uo du.#piofTfusU
 ``*a`pABam +buNationm adDitann!D@unCTkgN4oUs%`A bQngt	n t`Ccll b!d/re #ALlinG f4NCtmOnDgSd, v)`d m
lY
    *           @         " @        $          B Ll f5"CtaonToQse if p`epE Is kn oRdR,Ap* N Ibne4 hR pawSd tHroug` To Tjis fuFbtion a,,Ow! @}oU!to aed!qoMe DoOd INFO oF!D`e Or%lA`( `.m avs positIaf. `  *'    4h	C.kIg#KGTdR,Ap 1 &U.C0ioo(kb*!nbk2, fuNCti*\OUSe  @rg3, `"i0ioGAl5/@phCnTLsg) {        rEturN thIC.c/hlsio,	Ob1- CCH:, True, unCtionToAse, args, additionalFunctionToUse);
    }

    /**
    * Gets the object type to check against, could be a group
    * or could be a child
    *
    * Used Internally.
    *
    * @param {Object} obj The ob `#d D  hECa       2A4$r  3O`(%"@D iBb T F`  C4 `QP%    P'c Ba@% C(Ed      pphb`0E     
    @`dQ0   Dp.c@B*(M" ( r          	B(Lb* ActlCEC A 2)t!            p`DBd ) & it01         ` b Al@ !d#Dl$ HE0A(HHd)             rap5  A *hi(`8    5
      ((
      C@04. B$` A` $ C@A(l 4  Al"q  0Me`@0 4" @e ``Ed `l T d "E.#th/
    
 DHs I B1ppdF $x N+P `D `L`"$ Hj  ` @b2  I(    "    " @0$   dD`Pna` ri! @# a-``AR *      
    ( T e # PDaTp# an eH!dI+J pn cA  A d 1#@@$ `b  $ d@el rApa@b$$c `Jd A0D H!    A#  pi!@     ` .hhahen As t2pe T(iQ @   Fe2q  acx !0 
 @&)l" ` B  0 BT@nl0 v&R` @$d  D 2jly
       He `L`P 2	 5t(@@ !0 0l@  DnC@   !r @ fe, @Ig$ R	@ A !ddt    p @ fT&phdf @EFAba"A 
          @ AR   O`Je!0( cB*  Ph$ B R f !t Phd  C  `@`   p`d (  c)"b @  p p!q  D g0d`    "                        p 4` @@Aap l	@ N H H- 
      @ rad A`@`tM @h0  T@!  !A  "(Ea@ 0ha@ 	! @`r o&  h$ B,`1lJ  (d !  P C$$ 0de(    *                      `Bp `H P`A0d0 oLl@pH$" LD@ B$*    
  `2AE           @@AA"@ d@ ` 	 PLa0I&$( @   B`2 8          @dD `@d@$ RC 0@asD  @`2cu%   ar ADeB2 d"  $P `@r dE$`  !0P!)        6   a`g3A2ap < H%4 Po!@B(ID(b 
! ` Iq ,D" @ `q0  ($ob 0( `P)(#!$@(@!rd         + @d` 0`  ie@$ !dD` ta n%  C@ )4 Op T AD lDht  M        t`)1@`c1  
Pl`;        .+ P`T T E F```d  @,u$ @
 jP`   c 	 1 ,d@ D  d X P  $        "a F*BPh(.P sNk 1  @@c*C4HkNTP!0        t@ 0(Fp,@(+`Es!  *E,L0         /% FIre  ha $ a)0dD $0"C@ig Eap   @ ! D)`H!Jh P!@ ,%tE2         (Dn  BL@%aaE  
Ll              "Dn#@(k$ T  &@p0  Beb Da)"nP1 L)2 aP&1 R A)(8
    =     *       DaD @E d`ME# hF#P JA$     "  r`A  `L%  @ E C A      -      EE S@AA  @ Fc4 !h(( Q
        0A 2* G@)D,	LT CA)    Q    %  %D `@8p (f' U  Gdl PH! &Ba  hB )dC`JpApD   0@iCB"B0 rd 4(@ ( U3