import 'package:flutter/material.dart';


class IntroWidget extends StatelessWidget {
          @override
          Widget build(BuildContext context) {
            return Container(
      width: 375,
      height: 812,
      decoration: BoxDecoration(
          color : Color.fromRGBO(255, 255, 255, 1),
  ),
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 184,
        left: 0,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[Container(
      width: 375,
      height: 264,
      
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 0,
        left: 0,
        child: Container(
        width: 375,
        height: 264,
        decoration: BoxDecoration(
          image : DecorationImage(
          image: AssetImage('assets/images/Coolkidshightech.png'),
          fit: BoxFit.fitWidth
      ),
  )
      )
      ),
        ]
      )
    ), SizedBox(height : 16),
Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[Container(
      width: 341,
      height: 72,
      
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 0,
        left: 0,
        child: Text('Make Your Dreams Come True', textAlign: TextAlign.center, style: TextStyle(
        color: Color.fromRGBO(59, 57, 54, 1),
        fontFamily: 'Rubik',
        fontSize: 24,
        letterSpacing: -0.5,
        fontWeight: FontWeight.normal,
        height: 1.3333333333333333
      ),)
      ),
        ]
      )
    ), SizedBox(height : 8),
Text('Have a Dream, Make a Plan and Go for It. We’ll make sure You get There. ', textAlign: TextAlign.center, style: TextStyle(
        color: Color.fromRGBO(120, 116, 109, 1),
        fontFamily: 'Rubik',
        fontSize: 14,
        letterSpacing: 0,
        fontWeight: FontWeight.normal,
        height: 1.5
      ),),
],
      ),
    ),

        ],
      ),
    ), SizedBox(height : 16),
null,
],
      ),
    )
      ),Positioned(
        top: 60,
        left: 314,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          Text('Skip', textAlign: TextAlign.right, style: TextStyle(
        color: Color.fromRGBO(120, 116, 109, 1),
        fontFamily: 'Rubik',
        fontSize: 14,
        letterSpacing: 0,
        fontWeight: FontWeight.normal,
        height: 1.1428571428571428
      ),),

        ],
      ),
    )
      ),Positioned(
        top: 706,
        left: 32,
        child: Container(
      decoration: BoxDecoration(
          borderRadius : BorderRadius.only(
            topLeft: Radius.circular(16),
            topRight: Radius.circular(16),
            bottomLeft: Radius.circular(16),
            bottomRight: Radius.circular(16),
          ),
      color : Color.fromRGBO(47, 128, 237, 1),
  ),
      padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          Text('Get Started', textAlign: TextAlign.center, style: TextStyle(
        color: Color.fromRGBO(255, 255, 255, 1),
        fontFamily: 'Rubik',
        fontSize: 16,
        letterSpacing: 0,
        fontWeight: FontWeight.normal,
        height: 1.125
      ),),

        ],
      ),
    )
      ),Positioned(
        top: 0,
        left: 0,
        child: null
      ),Positioned(
        top: 778,
        left: 121,
        child: null
      ),
        ]
      )
    );
          }
        }
        