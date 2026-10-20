/* ===== DỮ LIỆU BÀI 1–2 — 奇妙汉语 =====
   Nguồn: game chém chữ bài 1–2 và slide bộ thủ (bo_1.pptx)
   Một file cho mỗi bài. Game từng bài, game tổng hợp và bảng xếp hạng đều đọc chung file này,
   nên sửa nghĩa hay phiên âm ở đây là mọi game cập nhật theo.
   CONF có thể nhắc tới từ của bài khác: chơi riêng một bài thì máy tự bỏ qua, chơi tổng hợp thì dùng. */
(window.QMHY_DATA = window.QMHY_DATA || {})['bai-1-2'] = {

  /* ----- GAME CHÉM CHỮ: P (phiên âm, giải thích khi sai), CONF (quả nhiễu), MEAN (nghĩa làm đề) ----- */
  chem: {
    P: {
      '我': {py:'wǒ', why:'我 là chính người đang nói.'},
      '您': {py:'nín', why:'您 là cách gọi lịch sự của 你, dùng với người lớn tuổi, thầy cô, khách hàng. Chữ 你 có thêm bộ 心 bên dưới.'},
      '你': {py:'nǐ', why:'你 là một người đang nói chuyện trực tiếp với người nói. Nam hay nữ đều dùng 你.'},
      '他': {py:'tā', why:'他 là một người nam không tham gia cuộc nói chuyện. Bộ 亻 bên trái chỉ "người".'},
      '她': {py:'tā', why:'她 là một người nữ không tham gia cuộc nói chuyện. Bộ 女 bên trái chỉ "nữ".'},
      '它': {py:'tā', why:'它 dùng cho con vật hoặc đồ vật, nên không có bộ 亻 hay bộ 女.'},
      '我们': {py:'wǒmen', why:'我们 là người nói cùng những người trong nhóm của mình. Thêm 们 là thành số nhiều.'},
      '你们': {py:'nǐmen', why:'你们 là hai người trở lên đang nói chuyện trực tiếp với người nói.'},
      '他们': {py:'tāmen', why:'他们 dùng cho nhóm toàn nam, và cả nhóm có cả nam lẫn nữ.'},
      '她们': {py:'tāmen', why:'她们 chỉ dùng cho nhóm toàn nữ.'},
      '它们': {py:'tāmen', why:'它们 dùng cho nhiều con vật hoặc nhiều đồ vật.'},
      '好': {py:'hǎo', why:'好 gồm 女 và 子. Đừng nhầm với 她, chữ này cũng có bộ 女.'},
      '不': {py:'bù', why:'不 nghĩa là "không", đứng trước động từ hoặc tính từ để phủ định.'},
      '对不起': {py:'duìbuqǐ', why:'对不起 dùng để xin lỗi. Người kia thường đáp lại bằng 没关系.'},
      '没关系': {py:'méi guānxi', why:'没关系 dùng để đáp lại khi người khác xin lỗi (对不起).'},
      '谢谢': {py:'xièxie', why:'谢谢 dùng để cảm ơn. Người kia thường đáp lại bằng 不客气.'},
      '不客气': {py:'bú kèqi', why:'不客气 là 不 + 客气, dùng để đáp lại 谢谢. 不 đứng trước thanh 4 nên đọc thành bú.'},
      '客气': {py:'kèqi', why:'客气 là khách sáo. Thêm 不 phía trước thành 不客气 (không có gì).'},
      '再见': {py:'zàijiàn', why:'再见 là 再 (lại) + 见 (gặp), nghĩa là tạm biệt, hẹn gặp lại.'},
      '见': {py:'jiàn', why:'见 là gặp, thấy. Thêm 再 phía trước thành 再见 (tạm biệt).'}
    },
    CONF: {
      '我': ['你', '我们', '他'],
      '你': ['您', '我', '你们'],
      '您': ['你', '你们', '我', '贵姓'],
      '他': ['她', '它', '他们'],
      '她': ['他', '它', '她们', '李月'],
      '它': ['他', '她', '它们'],
      '我们': ['我', '你们', '他们'],
      '你们': ['你', '我们', '他们', '学生们'],
      '他们': ['她们', '他', '你们', '姓', '贵姓'],
      '她们': ['他们', '她', '它们'],
      '它们': ['它', '他们', '她们'],
      '好': ['她', '不', '见', '好人'],
      '不': ['不客气', '好', '没关系', '吗'],
      '对不起': ['没关系', '谢谢', '不客气'],
      '没关系': ['对不起', '不客气', '不'],
      '谢谢': ['不客气', '对不起', '再见'],
      '不客气': ['客气', '谢谢', '没关系'],
      '客气': ['不客气', '谢谢', '见'],
      '再见': ['见', '谢谢', '对不起'],
      '见': ['再见', '客气', '好']
    },
    MEAN: {
      '我': {vi:'tôi', note:''},
      '您': {vi:'ngài, ông, bà', note:'cách gọi lịch sự của 你'},
      '你': {vi:'bạn', note:'một người đang nói chuyện với mình'},
      '他': {vi:'anh ấy', note:'một người nam'},
      '她': {vi:'cô ấy', note:'một người nữ'},
      '它': {vi:'nó', note:'con vật, đồ vật'},
      '我们': {vi:'chúng tôi, chúng ta', note:''},
      '你们': {vi:'các bạn', note:'nhiều người đang nói chuyện với mình'},
      '他们': {vi:'họ', note:'nhóm nam, hoặc có cả nam lẫn nữ'},
      '她们': {vi:'các cô ấy', note:'nhóm toàn nữ'},
      '它们': {vi:'chúng nó', note:'nhiều con vật, đồ vật'},
      '好': {vi:'tốt, khỏe', note:''},
      '不': {vi:'không', note:'phủ định, đứng trước động từ, tính từ'},
      '对不起': {vi:'xin lỗi', note:''},
      '没关系': {vi:'không sao', note:'đáp lại lời xin lỗi'},
      '谢谢': {vi:'cảm ơn', note:''},
      '不客气': {vi:'không có gì', note:'đáp lại lời cảm ơn'},
      '客气': {vi:'khách sáo', note:''},
      '再见': {vi:'tạm biệt', note:'hẹn gặp lại'},
      '见': {vi:'gặp, thấy', note:''}
    }
  },

  /* ----- ĐỈNH LUYỆN CHỮ: PART (âm đọc, nghĩa bộ phận), CHARS (chữ cần ghép; word có □ là chỗ của chữ) ----- */
  ghep: {
    PART: {
      '亻': ['rén', 'Bộ nhân đứng, chỉ con người'],
      '尔': ['ěr', 'Nhĩ'],
      '心': ['xīn', 'Bộ tâm, tim'],
      '你': ['nǐ', 'Bạn, anh, chị'],
      '女': ['nǚ', 'Bộ nữ, chỉ con gái, phụ nữ'],
      '子': ['zǐ', 'Bộ tử, chỉ con cái'],
      '门': ['mén', 'Bộ môn, cái cửa'],
      '戈': ['gē', 'Bộ qua, vũ khí, cây mác'],
      '手': ['shǒu', 'Bộ thủ, tay'],
      '也': ['yě', 'Dã, cũng'],
      '宀': ['mián', 'Bộ miên, mái nhà'],
      '匕': ['bǐ', 'Bộ chủy, cái muỗng'],
      '讠': ['yán', 'Bộ ngôn, nói'],
      '身': ['shēn', 'Thân, cơ thể'],
      '寸': ['cùn', 'Thốn, tấc (đơn vị đo chiều dài)'],
      '又': ['yòu', 'Bộ hựu, lại'],
      '走': ['zǒu', 'Bộ tẩu, đi lại'],
      '己': ['jǐ', 'Kỷ, bản thân'],
      '氵': ['shuǐ', 'Bộ ba chấm thủy, nước'],
      '殳': ['shū', 'Thù, ngọn giáo']
    },
    CHARS: [
      {c:'你', py:'nǐ', vi:'bạn, anh, chị', parts:['亻', '尔'], st:'trái – phải', fake:['女', '也', '门', '心']},
      {c:'您', py:'nín', vi:'ngài, ông, bà (kính trọng)', parts:['你', '心'], st:'trên – dưới', fake:['亻', '尔', '女', '子']},
      {c:'好', py:'hǎo', vi:'tốt, khỏe', parts:['女', '子'], st:'trái – phải', fake:['亻', '也', '宀', '又']},
      {c:'们', py:'men', vi:'chúng tôi', word:'我□', wpy:'wǒmen', parts:['亻', '门'], st:'trái – phải', fake:['女', '尔', '也', '又']},
      {c:'我', py:'wǒ', vi:'tôi', parts:['手', '戈'], st:'trái – phải', fake:['又', '寸', '殳', '匕']},
      {c:'他', py:'tā', vi:'anh ấy, ông ấy', parts:['亻', '也'], st:'trái – phải', fake:['女', '宀', '匕', '尔']},
      {c:'她', py:'tā', vi:'cô ấy, bà ấy', parts:['女', '也'], st:'trái – phải', fake:['亻', '宀', '子', '匕']},
      {c:'它', py:'tā', vi:'nó (con vật, đồ vật)', parts:['宀', '匕'], st:'trên – dưới', fake:['亻', '女', '也', '心']},
      {c:'谢', py:'xiè', vi:'cảm ơn', word:'□□', wpy:'xièxie', parts:['讠', '身', '寸'], st:'trái – giữa – phải', fake:['又', '殳', '己']},
      {c:'对', py:'duì', vi:'xin lỗi', word:'□不起', wpy:'duìbuqǐ', parts:['又', '寸'], st:'trái – phải', fake:['讠', '身', '殳', '己']},
      {c:'起', py:'qǐ', vi:'xin lỗi', word:'对不□', wpy:'duìbuqǐ', parts:['走', '己'], st:'nửa bao (走 bao trái và dưới)', fake:['又', '寸', '殳', '子']},
      {c:'没', py:'méi', vi:'không sao', word:'□关系', wpy:'méi guānxi', parts:['氵', '殳'], st:'trái – phải', fake:['讠', '又', '寸']}
    ]
  }
};
