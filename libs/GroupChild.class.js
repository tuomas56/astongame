/**
* GroupChild class, these are the actual objects created when
* the Sprite.create is called. This allows for specific
* control over each object.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
* @class
*
* @param {PIXI.DisplayObject} child The child object
*/
function GroupChild(child){

	/** @member {PIXI.DisplayObject} */
	this.child = child;
	/** @member {number} */
	this.stillFrame;
	/** @member {Array} */
	this.animations;

	/**
	* The constructor used to encapsulate the code run when the object
	* is first instantiated. It is called at the bottom of the file.
	* So it does not need to be called as it has already been called.
	*
	* @private
	*/
	this.constructor = function() {
		// Store the child
		this.child = child;
		// Still frame is 0 by default
		this.stillFrame = 0;
		// Store the animation names
		this.animations = [];
	}

	/**
	* Set the x velocity of the child
	*
	* @param {number} velocityX The x velocity to give the child
	*/
	this.setVelocityX = function(velocityX) {
		this.child.body.velocity.x = velocityX;
	}

	/**
	* Set the y velocity of the child
	*
	* @param {number} velocityY The y velocity to give the child
	*/
	this.setVelocityY = function(velocityY) {
		this.child.body.velocity.y = velocityY;
	}

	/**
	* Set the x position of the child.
	* WARNING: This can sometime mess up the collision detection
	* so it is usually best to use @see setVelocityX
	*
	* @param {number} x The x position to give the child
	*/
	this.setX = function(x) {
		this.child.body.x = x;
	}

	/**
	* Set the y position of the child
	* WARNING: This can sometime mess up the collision detection
	* so it is usually best to use @see setVelocityY
	*
	* @param {number} y The y position to give the child
	*/
	this.setY = function(y) {
		this.child.body.y = y;
	}

	/**
	* Set the x gravity on the child
	*
	* @param {number} gravityX The x gravity to give the child
	*/
	this.setGravityX = function(gravityX) {
		this.child.body.gravity.x = gravityX;
	}

	/**
	* Set the y gravity on the child
	*
	* @param {number} gravityY The y gravity to give the child
	*/
	this.setGravityY = function(gravityY) {
		this.child.body.gravity.y = gravityY;
	}

	/**
	* Stops the animation that is currently being played
	* and shows the stop frame for the character.
	*/
	this.stop = function() {
		// Stop any animation that is playing
		this.child.animations.stop();
		// Set the current frame to the stop frame
		this.child.frame = this.stillFrame;
	}

	/**
	* Get the x position of the child
	*
	* @return {number} x The x position of the child
	*/
	this.getX = function() {
		return this.child.body.x;
	}

	/**
	* Get the y position of the child
	*
	* @return {number} y The y position of the child
	*/
	this.getY = function() {
		return this.child.body.y;
	}

	/**
	* Set the width of the child
	*
	* @param {number} width the width of the child
	*/
	this.setWidth = function(width) {
		this.child.width = width;
	}

	/**
	* Set the height of the child
	*
	* @param {number} height the height of the child
	*/
	this.setHeight = function(height) {
		this.child.height = height;
	}

	/**
	* Set if the child can move
	*
	* @param {boolean} immovable If the child is immovable, true means the child won't move
	*/
	this.setImovable = function(immovable) {
		this.child.body.immovable = immovable;
	}

	/**
	* Add an animation to the child
	*
	* @param {String} name The name of an animation, required for referencing later.
	* @param {number[]} frames An array of the frames the animation plays in the order that they are given
	* @param {number} fps The frame rate of the animation, higher plays the animation faster
	* @param {boolean} loop If the animation should loop, true by default
	*/
	this.addAnimation = function(name, frames, fps, loop) {

		// Ensure an animation with this name has not already been set
		if(this.animations.indexOf(name) != -1) {
			throw new Error("An animation with the name  \"" + name + "\" has already been set!");
		}

		// Add the name so that it cannot be used again
		this.animations.push(name);

		// By defaUL0 qDt lmcp po $pud
	lK0 = lo  px drq`8
		./lMk0 5 lg'p -== und!fafd@ > tbu% : lmo ;
		,/ AD$  He  I)`tion t/ t( `(h,d 	4 S" 	$`.a,@ma4	El3.aDd(nai%  Dpaaa2, DpR$ loo0		e
	**

 Sep! `he sp-p &rae! &o2 the pl!yer,
* ph(3 is t`D fram% phAd Is @hG#h SHDJ $he pDay%r )r C4op0$d
	" 	* @@`ba [nU)"eRy fBM `e bU!ber oF the &pald tM be qe4 a# 4h stOp D2ama(/
ThA1,R@T$Gb`L  5 d4nc$il.F"ale y		th!3,pDallFr` = &@aM$ l

	""
* l I3 ` prededhn%  anA-Dinn
	"* @pa2`e kPtp`G9 l`% hd fA-d f 4`% `n!ma(k t `day, 0(i al(-a4on
* ,0sd hAfd bdf #0e ted gi4` @1ee ad`@&imAda+l befo0a@`nd*
	*/	`ha2,phAqAn`iatho@   ftnaphoNaaa) c
	./ Ensu`` !n a(a-apicn WIth 4h)C n!( (@C  @ab 1e4
 	ab4 1Alhe!tinn3*il$%HOdlAeE) =< !) 8
		(rM n@d Ebrcr f !`iaatHGN ad  d`! BaMe  \"  + . ma # "T  (ac flt Yet BdeH c%t! () 	)

4hi1&`h)d ,hmata+lr@A(F`md(+}

	' *
* JiLl `d C`!Ld( removI.g !0 `fm The #`ee
	 (	thhSiill 4 &4n#thoH(! p
	t(Is.CH)hd&biDd((3	}
-(
* Se4 t`E a@p@a(t0ahS@ara,c9) od 4`A Ch!h`.
	*
	*   !B`m a$@h` Th$ a,pha va,qe po cep `tveen 0 aj` 
*
4(`3.se`Alph@   dqnctI-n(Alp``) [	has,chHld,al`a - alp(A:
	=

	+*
	
 @p1 @h` !hI`d'1 ANgda*
	* @paR!M K.U-bebU a!l$ @h$  n'le po s%p Th` chi$	*&
	Ph`s.#aT@.g`a =  t.c4akN(`l'%	 j
		DhaR.child.!'l` $ &&(d
|
/*  	* SaTS If the cHil` ``mu,d `d dr fbad (4h p@% m/use,(
* @pa"a $adfa"ld Hd th% @``L$ #@n Be d2Agc!d
(,	4h(S"cetD"aggable = fdNctiOb dr@fcab(e! {		I& `Agg``,%	 y
	/ Adl/5 A.p%T pmm $he louqd
T@is.cH)``anpqdDja`la$ = t05E#			
 D&abd  d@ag BGa 4h@ `ous!
		phI "C`!(@,&p5t
d.!bdeDbd(); 	} @hcd 
*/ Cpcp a.04t Fril tE idcE
	this.`Hi,d.a`pdfabddD 4 f`lrA
		/' DIp`@le  r`' d"Cm p(a mgtse
	dhis.#(ild"InPDt.d`s!b`e@b!g  ;
	!

	](*
* Setr Hf 4HE B`i d 4Al` C#,li`e a)Dh $dr oBBda4s n*hx o d3 haD #%r%
 *  ,eaDq 3%d w t  @qde #D0l$)3io	, 	* @pa2aa @e,``raoNOnD2 G IF D e c`(d chou@` "/ldA$% w(%j BhnC dRaGed") t`!scddCn,@`Qi-naGn@Rab 8 dubc4	cb(edhhs)&@Nnb! 	 {
		// A& hbpD (as baef #t On `( ahi$
	if(thi3.ch)Hdi,P5t !< n5Ll( 3
	.,qapp)la tHa O`8.-o6%s $O fDba ausas aohLisaOns p` 7G #		d`is*ahILd&B/dq.motc 9 !b+L,IbaknOn@r``
	= ALse X
			/- @a24 tHe qser b@th ab er`/r	tHr$s .e' A BKb( Qjq `AaD pl BaLl sa` 0A&g`b,a(tpue( f)rst "	;	}

	h

	/  
 B%p` Ta c`il$ do )iEO6a"Ld lB ngt


 @par`m ;Bmghean= halmt`Bde  Dhaq qht,d BE `Bd  tk D#Re, pBUd me!fr tha ahi`d%` 7On 	lv!	

 thhcsD	Eiot Le = Ft(`4HOn(	AL V! LA! 		th	p.chI,d."K`y*imL/ra"he 1 a-lOraBle;|	+*

	( If 0he object sHould Cmllid% With thd 7Orl` boqlD!2ieq.
	*     papam {@moh `n} collide If 	D shntld cod(Ide	.
	phi3.AollhdEopLdmunds  dunbtIon(cmllide b
		tHis.child.Cdy.c/,L!dETgBl$oundc = #illid%;|

	/(*
	* @dd  fu.c4ign to aalh wh%N !f alimatign hac binishe plAyilg	* Notd: T(aq vhll kj`q woph iF lo/p Is 3E@ 4G f`Lse of thA a.im!t)oN	(	* @`arae [Fu.#Tion} acp)on @e fufC4imn tg cadh	*
	thi3.ad$ActigJG. n)-atiOnCkmpl!de = FuncDion(act(On) x
		4 H`.b )Ld.evEFts.ojAnIm tiklCkmPleteadd(ac0a)l( thi
	}	/**
	( Pt!tec ib th% Abhdct is pMuchine phE g2GTld.
"	* @Repurn {b'oleN| k.Ground
	*/
	th)S*mnGrot&`  fqnction(! {
	BettR phis,chiL$.bodx.touhing.dnvn
9

	-+ Set eveRQdh)ng u0 uhej tH  /bbect hS i&rt!ntiated.
th(S.bEn3t2uctop !;
}