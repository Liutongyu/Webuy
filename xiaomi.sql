SET NAMES UTF8;
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE xiaomi CHARSET=UTF8;
USE xiaomi;


CREATE TABLE xm_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);


INSERT INTO xm_index_product VALUES
(NULL, 'Yeelight皓石LED', '大小尺寸960 x 640m ', './img/useForFamily/3.png', 1099, 'product_details.html?lid=1',1, 1),
(NULL, '8H乳胶弹簧静音床垫M3', '20cm厚度', './img/useForFamily/4.png', 1599, 'product_details.html?lid=5', 2, 2),
(NULL, '摩摩哒智能休闲按摩椅', '全身按摩，模拟零重力', './img/useForFamily/5.png', 4599, 'product_details.html?lid=9',3, 3),
(NULL, '8H魔方布艺L型组合沙发', '一键轻松组合，多层次柔软坐感', './img/useForFamily/6.png', 699, 'product_details.html?lid=13',4, 4),
(NULL, '8H七分区天然乳胶床垫R1', '泰国纯天然乳胶，新一代发泡工艺', './img/useForFamily/7.png', 1099, 'product_details.html?lid=17',5, 5),
(NULL, '铜师傅安格尔黑胡桃原木餐桌椅', '黑胡桃原木，悬浮式设计', './img/useForFamily/8.png', 299, 'product_details.html?lid=19',6, 6),
(NULL, '样子拼图茶几组合三件套', '简约百搭，高低错落', './img/useForFamily/9.png', 599, 'product_details.html?lid=38',0, 0),
(NULL, '头层水牛皮席三件套', '100%厚切头层牛皮，经久耐用', './img/useForFamily/10.png', 2249, 'product_details.html?lid=38',0, 0),

(NULL, '小米电视4A 32英寸 黑色', '卧室首选/轻至4kg ', '../img/video/3.png', 899, 'product_details.html?lid=55',1, 1),
(NULL, '小米电视4A 43英寸青春版', '蓝牙语音遥控/海量片源', '../img/video/4.png', 1399, 'product_details.html?lid=66', 2, 2),
(NULL, '小米电视4C 50英寸', '4K HDR/钢琴烤漆', './img/video/5.png', 1899, 'product_details.html?lid=9',3, 3),
(NULL, '小米电视4C 55英寸', '超窄边钢琴烤漆', './img/video/6.png', 699, 'product_details.html?lid=66',4, 4),
(NULL, '小米电视4 55英寸', '4.9mm超薄/超窄框设计', './img/video/7.png', 3699, 'product_details.html?lid=17',5, 5),
(NULL, '小米电视4C 55英寸', '金色超窄边框/4K超高清', '../img/video/8.png', 299, 'product_details.html?lid=19',6, 6),
(NULL, '小米电视4X 55英寸', '4K HDR/超窄边', './img/video/9.png', 599, 'product_details.html?lid=38',0, 0),
(NULL, '小米电视4C 32英寸', '我是推荐/人工智能系统', './img/video/10.png', 899, 'product_details.html?lid=38',0, 0),

(NULL, '悠启100D经典平纹连裤袜', '进口氨纶，X型收腹', './img/clothes/2.png', 49, 'product_details.html?lid=55',1, 1),
(NULL, 'Uleemark运动圆领长袖T恤男款', '科技面料，特殊拼接', './img/clothes/3.png', 99, 'product_details.html?lid=66', 2, 2),
(NULL, '悍将COOLMAX毛圈运动袜', '加厚毛圈，防护耐磨', './img/clothes/4.png', 49, 'product_details.html?lid=9',3, 3),
(NULL, '悍将轻运动袜系列', '吸湿排汗，抑菌透气', './img/clothes/5.png', 39, 'product_details.html?lid=66',4, 4),
(NULL, '悠启真我吊带文胸', '抗菌健康，柔软舒适', './img/clothes/6.png', 49, 'product_details.html?lid=17',5, 5),
(NULL, '一箭倾心 K金钻石项链手链', '金色超窄边框/4K超高清', './img/clothes/7.png', 989, 'product_details.html?lid=19',6, 6),
(NULL, 'instant me 100%真丝吊带套装', '珍贵真丝，轻奢套装', './img/clothes/8.png', 399, 'product_details.html?lid=38',0, 0),
(NULL, 'instant me 100%真丝吊带套装', '真丝吊带,裙睡袍套装', './img/clothes/9.png', 899, 'product_details.html?lid=38',0, 0),

(NULL, '悠启活力学院休闲双肩包', '坚韧结实，4级防泼水', './img/shoesAndBag/2.png', 169, 'product_details.html?lid=55',1, 1),
(NULL, '七面头层牛皮轻弹休闲鞋', '头层水牛皮，耐磨不易折', './img/shoesAndBag/3.png', 349, 'product_details.html?lid=66', 2, 2),
(NULL, '90分七道杠旅行箱', '静音耐磨方向轮', './img/shoesAndBag/4.png', 339, 'product_details.html?lid=9',3, 3),
(NULL, '手工缝线，舒适百搭', '七面头层牛皮帆船休闲鞋', './img/shoesAndBag/5.png', 199, 'product_details.html?lid=66',4, 4),
(NULL, '拒水涂层，400D面料抗撕裂', '90分全天候机能背包', './img/shoesAndBag/6.png', 399, 'product_details.html?lid=17',5, 5),
(NULL, '七面新经典头层牛皮工装靴', '硬朗军靴风格', './img/shoesAndBag/7.png', 989, 'product_details.html?lid=19',6, 6),
(NULL, '小米炫彩小背包', '4级防泼水，10L容量，轻盈背负', './img/shoesAndBag/8.png', 29, 'product_details.html?lid=38',0, 0),
(NULL, '米家运动鞋2', 'Uni-Moulding一体成型工艺', './img/shoesAndBag/9.png', 199, 'product_details.html?lid=38',0, 0),

(NULL, '日式桃山皮，四位创新馅料', '双珏熠辉月饼礼盒', './img/foods/2.png', 149, 'product_details.html?lid=55',1, 1),
(NULL, '出口品质，生态养殖', '阳澄湖大闸蟹礼券', './img/foods/3.png', 258, 'product_details.html?lid=66', 2, 2),
(NULL, '肉香味浓，专业排酸', '阿根廷整肉原切牛肉块 8斤装', './img/foods/4.png', 199, 'product_details.html?lid=9',3, 3),
(NULL, '进口巧克力，不含代可可脂', '巧克力中秋礼盒', './img/foods/5.png', 198, 'product_details.html?lid=66',4, 4),
(NULL, '冰栗500g*2袋/组', '冰爽香甜，颗粒饱满', './img/foods/6.png', 68, 'product_details.html?lid=17',5, 5),
(NULL, '和言美式低因挂耳咖啡 10包装', '健康底因，香味出众', './img/foods/7.png', 49, 'product_details.html?lid=19',6, 6),
(NULL, '营养便携，泡发简单', '一支好参（干海参速发型）', './img/foods/8.png', 312.8, 'product_details.html?lid=38',0, 0),
(NULL, '绍兴核心产区，传统工艺酿造', '醉进九黄酒经典4口味礼盒装', './img/foods/9.png', 189, 'product_details.html?lid=38',0, 0);


alter table xm_index_product add column spec1 varchar(20);
alter table xm_index_product add column spec2 varchar(20);
alter table xm_index_product add column spec3 varchar(20);
alter table xm_index_product add column spec4 varchar(20);

alter table xm_index_product add column price2 varchar(20);
alter table xm_index_product add column price3 varchar(20);
alter table xm_index_product add column price4 varchar(20);

alter table xm_index_product add column mpic VARCHAR(128);
alter table xm_index_product add column spic VARCHAR(128);

alter table xm_index_product add column mpic2 VARCHAR(128);
alter table xm_index_product add column mpic3 VARCHAR(128);
alter table xm_index_product add column mpic4 VARCHAR(128);
alter table xm_index_product add column mpic5 VARCHAR(128);
alter table xm_index_product add column mpic6 VARCHAR(128);
alter table xm_index_product add column spic2 VARCHAR(128);
alter table xm_index_product add column spic3 VARCHAR(128);
alter table xm_index_product add column spic4 VARCHAR(128);
alter table xm_index_product add column spic5 VARCHAR(128);
alter table xm_index_product add column spic6 VARCHAR(128);

CREATE TABLE index_product_bigtitle(
  ptid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  href VARCHAR(128)
);
INSERT INTO index_product_bigtitle VALUES
(NULL,'居家','./img/useForFamily/2.jpg','#'),
(NULL,'影音','./img/video/2.jpg','#'),
(NULL,'服饰','./img/clothes/1.clohtes_bg.jpg','#'),
(NULL,'鞋包','./img/shoesAndBag/1.shoes_bg.jpg','#'),
(NULL,'饮食','./img/foods/1.eat_bg.jpg','#');


CREATE TABLE xm_shoppingcart(
  cartid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  pid INT,
  count INT
);






