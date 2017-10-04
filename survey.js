module.exports = {
  id: 1,
  title: 'แบบสอบถามความคิดเห็นของผู้เข้ารับการพัฒนาในโครงการ ภายใต้ภารกิจของสำนักพัฒนาสมรรถนะครูและบุคลากรอาชีวศึกษา ประจำปีงบประมาณ พ.ศ.2560',
  detail: `<u>คำชี้แจง</u>
1. แบบสอบถาม
2.
3.
4
5.`,
  q: [
    {h: 'ชื่อโครงการ โครงการฝึกอบรมเชิงปฏิบัติการ หลักสูตร IoT (Internet of Things) ระหว่างวันที่ 30 กันยายน - 5 ตุลาคม 2560 ณ สำนักพัฒนาสมรรถนะครูและบุคลากรอาชีวศึกษา'},
    {h: '<u>ตอนที่ 1</u> ข้อมูลทั่วไปของผู้ตอบแบบสอบถาม'},
    {f: 'q1',
      t: '1. เพศ',
      ch: [
        {v: 'ชาย', t: 'ชาย'},
        {v: 'หญิง', t: 'หญิง'},
      ]},
    {f: 'q2',
      t: '2. อายุราชการ',
      ch: [
        {v: '<=10', t: 'น้อยกว่า 10 ปี'},
        {v: '11-20', t: '11-20 ปี'},
        {v: '21-30', t: '21-30 ปี'},
        {v: '>30', t: 'มากกว่า 30 ปี'},
      ]},
    {f: 'q3.1', t: '3. ประเภทบุคลากร'},
    {f: 'q3.2', t: '4. ตำแหน่ง/วิทยะฐานะ'},
    {f: 'q4', t: 'สังกัด'},
    {f: 'q5',
      t: '5. ประเภทงานที่รับผิดชอบ',
      chk: [
        {v: 'งานบริหารสถานศึกษา', t: 'งานบริหารสถานศึกษา'},
        {v: 'งานสนับสนุน',
          t: 'งานสนับสนุน',
          sub: [
            {f: 'q5.1', t: 'โปรดระบุ', inline: true},
          ]},
        {v: 'งานด้านการสอน',
          t: 'งานด้านการสอน',
          sub: [
            {f: 'q5.2',
              t: 'ประเภทวิชา',
              ch: [
                {v: 'อุตสาหกรรม',
                  t: 'อุตสาหกรรม',
                  sub: [
                    {f: 'q5.2.1', t: 'สาขา', inline: true},
                  ]},
                {v: 'เกษตรกรรม',
                  t: 'เกษตรกรรม',
                  sub: [
                    {f: 'q5.2.2', t: 'สาขา', inline: true},
                  ]},
                {v: 'คหกรรม',
                  t: 'คหกรรม',
                  sub: [
                    {f: 'q5.2.3', t: 'สาขา', inline: true},
                  ]},
                {v: 'พาณิชยกรรม',
                  t: 'พาณิชยกรรม',
                  sub: [
                    {f: 'q5.2.4', t: 'สาขา', inline: true},
                  ]},
                {v: 'ทักษะชีวิต',
                  t: 'ทักษะชีวิต',
                  sub: [
                    {f: 'q5.2.5', t: 'สาขา', inline: true},
                  ]},
                {v: 'นวัตกรรมและเทคโนโลยีสารสนเทศ',
                  t: 'นวัตกรรมและเทคโนโลยีสารสนเทศ',
                  sub: [
                    {f: 'q5.2.6', t: 'สาขา', inline: true},
                  ]},
                {v: 'อื่น ๆ',
                  t: 'อื่น ๆ',
                  sub: [
                    {f: 'q5.2.7', t: 'โปรดระบุ', inline: true},
                  ]},
              ]},
          ]},
      ]},
    {f: 'q6',
      t: '6. การเป็นสมาชิกสมาคม/ชมรม (เฉพาะสมาคมและชมรมที่ผ่านการรับรองจากสำนักงานคณะกรรมการการอาชีวศึกษา)',
      ch: [
        {v: 'เป็นสมาชิก',
          t: 'เป็นสมาชิก',
          sub: [
            {f: 'q6.1', t: 'สมาคม/ชมรม'},
          ]},
        {v: 'ไม่ได้เป็นสมาชิก', t: 'ไม่ได้เป็นสมาชิกสมาคม/ชมรม'},
      ]},
    {f: 'q7',
      t: '7. ท่านต้องการพัฒนาเพื่อเพิ่มความรู้ในการปฏิบัติงานหรือเพิ่มสมรรถนะหรือไม่ อย่างไร',
      ch: [
        {v: 'ต้องการ',
          t: 'ต้องการได้รับการพัฒนา โดยเรียงลำดับความต้องการดังนี้ (โปรดระบุหัวข้อเรื่องที่ต้องการพัฒนา)',
          sub: [
            {f: 'q7.1', t: '1.', inline: true},
            {f: 'q7.2', t: '2.', inline: true},
            {f: 'q7.3', t: '3.', inline: true},
          ]},
        {v: 'ไม่ต้องการ',
          t: 'ไม่ต้องการได้รับการพัฒนา',
          sub: [
            {f: 'q7.4', t: 'เนื่องจาก'},
          ]},
      ]},
    {h: 'ตอนที่ 2 ความคิดเห็นต่อโครงการพัฒนาบุคลากรอาชีวศึกษาของ สสอ.'},
    {t: 'โปรดอ่านข้อความและทำเครื่องหมาย ลงช่องระดับความคิดเห็นที่ตรงกับความคิดเห็นของท่าน'},
    {table: true,
      t: 'ข้อคำถาม',
      levelText: 'ระดับความคิดเห็น',
      level: [
        {v: 5, t: 'มากที่สุด'},
        {v: 4, t: 'มาก'},
        {v: 3, t: 'ปานกลาง'},
        {v: 2, t: 'น้อย'},
        {v: 1, t: 'น้อยที่สุด'},
      ],
      list: [
        {h: '1. การประเมินสภาวะแวดล้อม (Context Evaluation) เป็นการประเมินความต้องการจำเป็นเพื่อกำหนดโครงการ', span: true},
        {f: 't1.1', t: '1.1 โครงการนี้ มีความ<u>สอดคล้องกับยุทธศาสตร์</u>การพัฒนาบุคลากรอาชีวศึกษาของสถานศึกษา/หน่วยงานที่สังกัดระดับใด'},
        {f: 't1.2', t: '1.2 โครงการนี้มีความ<u>จำเป็นต่อการพัฒนาการงาน</u> ที่ท่านรับผิดชอบ ในระดับใด'},
        {h: '2. การประเมินปัจจัยนำเข้า (Input Evaluation) เป็นการประเมินทรัพยากรที่จำเป็นที่จะนำมาใช้ในการดำเนินโครงการ', span: true},
        {h: '2.1 วัตถุประสงค์ของโครงการ'},
        {f: 't2.1.1', t: '2.1.1 วัตถุประสงค์ของโครงการ <u>สอดคล้องกับยุทธศาสตร์การพัฒนาบุคลากร</u>ของสถานศึกษา/หน่วยงานที่สังกัดในระดับใด'},
        {f: 't2.1.2', t: '2.1.2 วัตถุประสงค์ของโครงการ <u>ทำให้เกิดองค์ความรู้ที่สามารถนำไปใช้ในการปฏิบัติงาน</u>ของท่าน ในระดับใด'},
        {h: '2.2 หลักสูตรและวิธีการดำเนินกิจกรรมโครงการ'},
        {f: 't2.2.1', t: '2.2.1 หลักสูตรของโครงการนี้ <u>สอดคล้องกับวัตถุประสงค์</u>ของโครงการ ในระดับใด'},
        {f: 't2.2.2', t: '2.2.2 <u>รูปแบบกิจกรรม</u>ของโครงการนี้ ทำให้<u>บรรลุวัตถุประสงค์ของโครงการ</u>ในระดับใด'},
        {h: '3. การเประเมินกระบวนการ (Process Evaluation) เป็นการประเมินการบริหารโครงการ', span: true},
        {h: '3.1 วิทยากร'},
        {f: 't3.1.1', t: '3.1.1 วิทยากร/ผู้นำการอภิปรายของโครงการนี้ <u>มีความรอบรู้</u>ในหลักสูตรของโครงการในระดับใด'},
        {f: 't3.1.2', t: '3.1.2 วิทยากร/ผู้นำการอภิปรายของโครงการนี้ <u>มีความสามารถในการถ่ายทอดความรู้</u>ในระดับใด'},
        {f: 't3.1.3', t: '3.1.3 วิทยากร/ผู้นำการอภิปรายของโครงการนี้เปิดโอกาสให้ผู้เข้ารับการพัฒนา <u>ได้แสดงความคิดเห็น</u> ในระดับใด'},
        {h: '3.2 ผู้เข้ารับการพัฒนาในโครงการ'},
        {f: 't3.2.1', t: '3.2.1 ท่านมีความต้องการเข้ารับการพัฒนาในโครงการนี้ ในระดับใด'},
        {f: 't3.2.2', t: '3.2.2 ท่าน<u>มีความพร้อม</u>ในการเข้ารับการพัฒนา ในระดับใด'},
        {h: '3.3 การดำเนินงานของผู้รับผิดชอบโครงการ'},
        {f: 't3.3.1', t: '3.3.1 ผู้รับผิดชอบโครงการ <u>มีมนุษยสัมพันธื/ประสานงาน</u> กับผู้เข้ารับการพัฒนา ในระดับใด'},
        {f: 't3.3.2', t: '3.3.2 ผู้รับผิดชอบโครงการ <u>ให้บริการ/อำนวยความสะดวก</u> กับผู้เข้ารับการพัฒนา ในระดับใด'},
        {h: '3.4 เอกสารประกอบในโครงการ'},
        {f: 't3.4.1', t: '3.4.1 โครงการนี้ <u>มีเอกสารเพียงพอ</u> ในระดับใด'},
        {f: 't3.4.2', t: '3.4.2 <u>เนื้อหาสาระ</u>ในเอกสารสอดคล้องกับหัวข้อหลักสูตรของโครงการ ในระดับใด'},
        {h: '3.5 สภาพแวดล้อมและสิ่งอำนวยความสะดวกต่าง ๆ'},
        {f: 't3.5.1', t: '3.5.1 <u>สถานที่ในการพัฒนา</u> มีความเหมาะสมกับกิจกรรมของโครงการ ในระดับใด'},
        {f: 't3.5.2', t: '3.5.2 โครงการนี้ <u>มีสื่อ/โสตทัศนูปกรณ์ที่ใช้ในการถ่ายทอดความรู้</u> ในระดับใด'},
        {f: 't3.5.3', t: '3.5.3 โครงการนี้ <u>มีการจัดสิ่งอำนวยความสะดวก</u> เข่น อินเตอร์เน็ต ให้แก่ผู้เข้ารับการพัฒนา ในระดับใด'},
        {h: '3.6 วัสดุฝึก (เฉพาะโครงการที่ต้องใช้วัสดุฝึกในการพัฒนา'},
        {f: 't3.6.1', t: '3.6.1 วัสดุฝึก<u>มีจำนวนเพียงพอ</u>ต่อการฝึกปฏิบัติ ในระดับใด'},
        {f: 't3.6.2', t: '3.6.2 วัสดุฝึก<u>มีคุณภาพ</u>สำหรับการฝึกปฏิบัติ ในระดับใด'},
        {h: '4. การประเมินผลผลิต (Product Evaluation) เป็นการประเมินผลที่ได้จากโครงการ', span: true},
        {f: 't4.1', t: '4.1 การเข้ารับการพัฒนาโครงการนี้ ทำให้ท่านได้รับความรู้ที่สามารถ<u>นำไปใช้ในการปฏิบัติงาน</u>ที่รับผิดชอบ ในระดับใด'},
        {f: 't4.2', t: '4.2 การเข้ารับการพัฒนาโครงการนี้ <u>ทำให้เกิดความคุ้มค่า</u> ในระดับใดเมื่อเทียบกับการต้องสละเวลาจากงานประจำของท่าน'},
        {f: 't4.3', t: '4.3 การเข้ารับการพัฒนาโครงการนี้ ทำให้ท่าน <u>มีเครือข่าย</u> ระหว่างผู้เข้ารับการพัฒนารุ่นเดียวกัน ในระดับใด'},
      ]},
    {f: 't5', t: '5. <u>หลังเสร็จสิ้นการพัฒนา</u> สมรรถนะที่ท่านได้รับเพิ่มขึ้น/องค์ความรู้ที่รับเพิ่ม คือ', textarea: true},
    {t: '6. <u>หลังเสร็จสิ้นการพัฒนา</u> ท่านคิดว่าจะนำความรู้ที่ได้รับไปใช้ให้เกิดประโยชน์อย่างไร'},
    {f: 't6.1', t: '6.1 ใช้พัฒนางานของตนเอง เกี่ยวกับ', textarea: true},
    {f: 't6.2', t: '6.2 ใช้พัฒนางานสถานศึกษา/หน่วยงาน เกี่ยวกับ', textarea: true},
    {f: 't6.3',
      t: '6.3 ขยายผลให้ความรู้ให้',
      chk: [
        {v: 'เพื่อนในหน่วยงาน', t: 'เพื่อนในหน่วยงาน'},
        {v: 'ชุมชน', t: 'ชุมชน'},
      ]},
    {f: 't6.3.1', t: 'เกี่ยวกับ', textarea: true},
    {f: 't6.4', t: 'อื่น ๆ', textarea: true},
    {h: '<u>ตอนที่ 3</u> ข้อเสนอและอื่น ๆ', textarea: true},
    {f: 't7', t: '', textarea: true},
  ], // q
}
