def all_info():
    columns_list = ["r.recruit_id, ",
                    "r.position_id, ",
                    "r.level_id, ",
                    "r.school_id, ",
                    "r.current_status, ",
                    "r.last_name, ",
                    "r.first_name, ",
                    "r.address, ",
                    "r.phone_number, ",
                    "r.email, ",
                    "r.height, ",
                    "r.offensive_rebounds, ",
                    "r.defensive_rebounds, ",
                    "r.free_throw_prcntg, ",
                    "r.three_point_prcntg, ",
                    "r.two_point_prcntg, ",
                    "r.assists, ",
                    "r.turnovers, ",
                    "r.steals, ",
                    "r.blocks, ",
                    "r.games_played, ",
                    "r.games_started, ",
                    "r.minutes_played, ",
                    "r.personal_fouls, ",
                    "p.position_name, ",
                    "l.level_name, ",
                    "r.grad_year, ",
                    "r.act_score, ",
                    "r.gpa, ",
                    "st.status, ",
                    "r.notes, ",
                    "s.school_name"]
    columns_string = "".join(columns_list)
    return columns_string

def school_info():
    columns_list = ["s.school_name, ",
                    "s.school_address, ",
                    "s.school_phone_number, ",
                    "s.school_website"]
    columns_string = "".join(columns_list)
    return columns_string